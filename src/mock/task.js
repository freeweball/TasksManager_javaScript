const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));

    return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateDescription = () => {
    const descriptions = [
        `Изучить теорию`,
        `Сделать домашку`,
        `Пройти интенсив на соточку`
    ];

    const randomIndex = getRandomInteger(0, descriptions.length - 1);

    return descriptions[randomIndex];
};

const generateDate = () => {
    const isDate = Boolean(getRandomInteger(0, 1));

    if (!isDate) {
        return null;
    }

    const maxDaysGap = 7;
    const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
    const currentDate = new Date();

    currentDate.setHours(23, 59, 59, 999);
    currentDate.setDate(currentDate.getDate() + daysGap);

    return new Date(currentDate);
};

const generateRepeating = () => {
    return {
        mo: false,
        tu: false,
        we: Boolean(getRandomInteger(0, 1)),
        th: false,
        fr: Boolean(getRandomInteger(0, 1)),
        sa: false,
        su: false
    };
};

export const generateTask = () => {
    const dueDate = generateDate();
    const repeating = generateRepeating();
    
    return {
        description: generateDescription(),
        dueDate,
        repeating,
        color: `black`,
        isArchive: false,
        isFavorite: false
    };
};