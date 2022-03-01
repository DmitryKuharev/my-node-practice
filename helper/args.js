

const getArgs = (args) => {
    const result = {};
    const [executer, file, ...rest] = args
    rest.forEach((element, index, array) => {
        if (element.charAt(0) == '-'){
            if (index == array.length - 1) {
                result[element.substring(1)] = true;
            } else if (array[index + 1].charAt(0) != '-') {
                result[element.substring(1)] = array[index + 1];
            } else{
                result[element.substring(1)] = true;
            }
        }
    });
    return result;
};

export { getArgs }