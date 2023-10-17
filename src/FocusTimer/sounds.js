export const cafeteria = new Audio('./assets/Cafeteria.wav')

export const chuva = new Audio('./assets/Chuva.wav')

export const floresta = new Audio('./assets/Floresta.wav')

export const lareira = new Audio('./assets/Lareira.wav')

export function Alarm() {
    const alarm = new Audio('./assets/Alarm.mp3');

    for (var i = 0; i < 2; i++) {
        setTimeout(() => {
            alarm.play();
        }, i * 4000);
    }
}


cafeteria.loop = true

chuva.loop = true

floresta.loop = true

lareira.loop = true
