export default class Presenter{

    constructor(
        model,
        inputs
    ) {
        this.model = model
        this.inputs = inputs
    }
    execute(){
        return this.model.getData(this.inputs.get('rgm'))
    }
}