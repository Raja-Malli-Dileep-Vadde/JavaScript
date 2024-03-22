const faceBookUser = new Object() //singleton object if declare like this
faceBookUser.id = "Raja"
// console.log(faceBookUser)





// non-singleton object


instaUser = {}

instaUser.name = "raja"
instaUser.phone = "45345643"


// console.log(instaUser)


const objOne = {
 oneName:"raja",
 oneId: 1
}
const objTwo = {
    TwoName:"Malli",
    TwoId: 2
   }

   const  objThree = {
    ThreeName:"Dileep",
    ThreeId: 3
   }

   const ObjFinal = Object.assign({},objOne,objTwo,objThree)

   console.log(ObjFinal)


   const objLast = {...objOne,...objTwo,...objTwo} // Spread operator 


   console.log(objLast)



   objBackEnd = [
    {
        name:"Dileep",
        id:1
    },

    {
        name:"raja",
        id:2
    },
    {
        name:"malli",
        id:3
    },
    {
        name:"vadde",
        id:4
    }
    
]


normalUser= {
    details:{
        fullName:{
            LastName:"Vadde",
            FirstName:"Malli"

        }
    }

}


console.log(objBackEnd[1].name)
   objBackEnd[1].name

   console.log(normalUser.details.fullName.FirstName)  


const keys = Object.keys(ObjFinal)

console.log(keys)

const values = Object.values(ObjFinal)

console.log(values)

const entries = Object.entries(ObjFinal)

console.log(entries)



const objFind = normalUser.hasOwnProperty("details") // to check the property in the object 

console.log(objFind)


