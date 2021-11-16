export class Recipe{
    public name:string;
    public descriptio: string;
    public imagepath:string;
    
    constructor(name: string, desc: string , imagepath:string){
        this.name = name;
        this.descriptio = desc;
        this.imagepath = imagepath;
    }
}
