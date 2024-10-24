let bol : boolean = false

let u: undefined = undefined

let n: null = null

const sayHi = () :void => {
  console.log('Hello, TypeScript!')
}

const say = () :string => {
  return 'Hello, TypeScript!'
}

const createUser = (name: string, age?:number):string | number => `${name}  ${age}`

const b = createUser('Malik')

const createUniUser = (name:string = 'Malik', age:number = 23):string | number => `${name} ${age}`

const a = createUniUser('Malik', 24)  

const createUserSkills = (name:string, ...skills:Array<string>) => `${name} my skills ${skills.join()}`

const k = createUserSkills('Malik', 'html','js','css')

type People = {
  name: string,
  age:number,
  nickName?: string,
  hobbies?: () => string
}

const student: People = {
  name: 'Malik',
  age: 23,
  nickName: 'olod'
}

const person: People = {
  name: 'Malik',
  age: 23,
  getName():string {
    return `${this.name} and ${this.age}`
  }
}