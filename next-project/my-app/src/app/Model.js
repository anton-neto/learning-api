export default class Model {

    getData(rgm) {
        // A aquisição de dados
        const data = this.dataOrigin()

        // aplicar a regra de negócio
        const response = data.find(e => e.rgm == rgm )
    
        return response
        //return data
    }

    dataOrigin() {
        return [
            {
                name:'Super Xandão',
                rgm:'8833702233',
                job:'Desenvolvedor de Software'
            },
            {
                name:'50 Cent',
                rgm:'256465',
                job:'Diretor'
            },
            {
                name:'Jay-Z',
                rgm:'564654',
                job:'Gerente'
            },
            {
                name:'P.Diddy',
                rgm:'696969696',
                job:'Cuidador de Crianças'
            },
            {
                name:'Michael Jackson',
                rgm:'256465',
                job:'Funerária'
            },
            {
                name:'Will Smith',
                rgm:'564654',
                job:'Lutador de Box'
            }
            
        ]
    }

}