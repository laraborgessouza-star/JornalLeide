/* ============================================================
   ÓPTICA DO OLHO — script.js
   Lógica do simulador interativo e renderizações no Canvas
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initHeroCanvas();
    initSimulador();
});

/* ----- CANVAS ILUSTRATIVO DO HERO ----- */
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function drawHeroEye() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = 250;
        const centerY = 200;

        // Esclera
        ctx.beginPath();
        ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
        ctx.fillStyle = '#163252';
        ctx.strokeStyle = '#3a7fcb';
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();

        // Córnea
        ctx.beginPath();
        ctx.arc(centerX - 90, centerY, 60, -Math.PI / 3, Math.PI / 3);
        ctx.strokeStyle = '#e8a030';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Cristalino
        ctx.beginPath();
        ctx.ellipse(centerX - 50, centerY, 12, 35, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 223, 244, 0.3)';
        ctx.strokeStyle = '#c8dff4';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        // Feixes de Luz
        ctx.lineWidth = 2;

        // Superior
        ctx.beginPath();
        ctx.moveTo(30, centerY - 60);
        ctx.lineTo(centerX - 50, centerY - 25);
        ctx.lineTo(centerX + 120, centerY);
        ctx.strokeStyle = 'rgba(232, 160, 48, 0.7)';
        ctx.stroke();

        // Central
        ctx.beginPath();
        ctx.moveTo(30, centerY);
        ctx.lineTo(centerX + 120, centerY);
        ctx.strokeStyle = 'rgba(232, 160, 48, 0.9)';
        ctx.stroke();

        // Inferior
        ctx.beginPath();
        ctx.moveTo(30, centerY + 60);
        ctx.lineTo(centerX - 50, centerY + 25);
        ctx.lineTo(centerX + 120, centerY);
        ctx.strokeStyle = 'rgba(232, 160, 48, 0.7)';
        ctx.stroke();

        // Ponto Focal na Retina
        ctx.beginPath();
        ctx.arc(centerX + 120, centerY, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#e8a030';
        ctx.fill();
    }

    drawHeroEye();
}

/* ----- SIMULADOR ÓPTICO ----- */
let lensPowerInput, eyeLengthInput;
let lensPowerVal, eyeLengthVal, simStatus;
let eyeCanvas, ctxSim;

function initSimulador() {
    eyeCanvas = document.getElementById('eyeCanvas');
    if (!eyeCanvas) return;
    ctxSim = eyeCanvas.getContext('2d');

    lensPowerInput = document.getElementById('lensPower');
    eyeLengthInput = document.getElementById('eyeLength');
    lensPowerVal = document.getElementById('lensPowerVal');
    eyeLengthVal = document.getElementById('eyeLengthVal');
    simStatus = document.getElementById('simStatus');

    if (lensPowerInput) lensPowerInput.addEventListener('input', updateSim);
    if (eyeLengthInput) eyeLengthInput.addEventListener('input', updateSim);

    updateSim();
}

function updateSim() {
    if (!lensPowerInput || !eyeLengthInput || !eyeCanvas) return;

    const power = parseInt(lensPowerInput.value, 10);
    const length = parseInt(eyeLengthInput.value, 10);

    if (lensPowerVal) lensPowerVal.textContent = `${power} D`;
    if (eyeLengthVal) eyeLengthVal.textContent = `${length} mm`;

    renderEyeSimulation(power, length);
}

function renderEyeSimulation(power, length) {
    const w = eyeCanvas.width;
    const h = eyeCanvas.height;
    const centerY = h / 2;

    ctxSim.clearRect(0, 0, w, h);

    const eyeStartX = 150;
    // Mapeia comprimento visual no canvas (18mm a 30mm)
    const eyeRadius = (length / 24) * 110;
    const retinaX = eyeStartX + (eyeRadius * 1.8);

    // Desenhar Estrutura Ocular
    ctxSim.beginPath();
    ctxSim.arc(eyeStartX + eyeRadius, centerY, eyeRadius, 0, Math.PI * 2);
    ctxSim.fillStyle = '#ffffff';
    ctxSim.strokeStyle = '#2061a0';
    ctxSim.lineWidth = 3;
    ctxSim.fill();
    ctxSim.stroke();

    // Retina (Linha no fundo)
    ctxSim.beginPath();
    ctxSim.arc(eyeStartX + eyeRadius, centerY, eyeRadius - 2, -Math.PI / 2.5, Math.PI / 2.5);
    ctxSim.strokeStyle = '#a02020';
    ctxSim.lineWidth = 5;
    ctxSim.stroke();

    // Cristalino (Espessura varia com o 'Power')
    const lensThickness = (power / 20) * 10;
    const lensX = eyeStartX + 30;

    ctxSim.beginPath();
    ctxSim.ellipse(lensX, centerY, lensThickness, 40, 0, 0, Math.PI * 2);
    ctxSim.fillStyle = 'rgba(200, 223, 244, 0.6)';
    ctxSim.strokeStyle = '#2061a0';
    ctxSim.lineWidth = 2;
    ctxSim.fill();
    ctxSim.stroke();

    // Cálculo do Ponto Focal no Canvas
    const idealFocalDist = retinaX - lensX;
    const focalShift = (20 - power) * 5 + (length - 24) * 2;
    const focalPointX = lensX + idealFocalDist - focalShift;

    // Desenhar Feixes de Luz
    drawRay(30, centerY - 35, lensX, centerY - 25, focalPointX, centerY);
    drawRay(30, centerY, lensX, centerY, focalPointX, centerY);
    drawRay(30, centerY + 35, lensX, centerY + 25, focalPointX, centerY);

    // Ponto de Foco Luminoso
    ctxSim.beginPath();
    ctxSim.arc(focalPointX, centerY, 4, 0, Math.PI * 2);
    ctxSim.fillStyle = '#e8a030';
    ctxSim.fill();

    // Atualizar Mensagem do Estado
    if (simStatus) {
        const diff = Math.abs(focalPointX - retinaX);
        if (diff < 6) {
            simStatus.textContent = "Foco ideal na retina (Emetropia)";
            simStatus.className = "sim-status";
        } else if (focalPointX < retinaX) {
            simStatus.textContent = "Imagem focada ANTES da retina (Miopia)";
            simStatus.className = "sim-status warn";
        } else {
            simStatus.textContent = "Imagem focada DEPOIS da retina (Hipermetropia)";
            simStatus.className = "sim-status error";
        }
    }
}

function drawRay(x1, y1, x2, y2, x3, y3) {
    ctxSim.beginPath();
    ctxSim.moveTo(x1, y1);
    ctxSim.lineTo(x2, y2);
    ctxSim.lineTo(x3, y3);
    ctxSim.strokeStyle = 'rgba(232, 160, 48, 0.85)';
    ctxSim.lineWidth = 2;
    ctxSim.stroke();
}

/* ----- CONTROLES EXTERNOS E PRESETS ----- */
window.applyPreset = function(type) {
    if (!lensPowerInput || !eyeLengthInput) return;

    if (type === 'emetropia') {
        lensPowerInput.value = 20;
        eyeLengthInput.value = 24;
    } else if (type === 'miopia') {
        lensPowerInput.value = 26;
        eyeLengthInput.value = 28;
    } else if (type === 'hipermetropia') {
        lensPowerInput.value = 14;
        eyeLengthInput.value = 20;
    }
    updateSim();
};

window.resetSim = function() {
    window.applyPreset('emetropia');
};
