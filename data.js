

let diccionario = [];

const InputList = [{ first: 1, second: 5 }, { first: 2, second: 10 }, { first: 15, second: 20 }]

exports.Database = async (req, res) => {
    try {
        var element = []
        for (let index = 0; index < 4096; index++) {
            element.push(index);
        }
        await industrialProtocol(InputList);
        res.status(200).send({
            codRes: "00",
            response: diccionario
        })

    } catch (error) {
        console.log(error)
        return error
    }
}

const industrialProtocol = async (InputList) => {
    try {
        let respuesta;
        for (let index = 0; index < InputList.length; index++) {
            respuesta = await read(InputList[index]);
        }
    } catch (error) {
        console.log(error)
        return error
    }
}

const read = ({ first, second }) => {
    try {
        do {
            diccionario.includes(first) == true ? console.log(`no se agrego ${first}`) : diccionario.push(first)
            first++;
        } while (first <= second);
    } catch (error) {
        throw new Error(error)
    }
}
