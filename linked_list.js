class LinkedList
{
  constructor () 
  {
    this.list = null
  }

  créer(ele)
  {
    if(!this.list)
    {
      this.list=new newNode(ele)
    }
    else
    {
      let temp=this.list
      //trouver l'adresse du dernier nœud node
      while(temp.next!=null)
        temp=temp.next
      temp.next=new newNode(ele)//ajouter un nouveau nœud à list
    }
  }
  // ajouter après les éléments
  ajouter_apre(nouveaux_elements,elements)
  {
    var apre_nod = this.search(elements);
    if (apre_nod!=null) {
      var node=new newNode(nouveaux_elements)
      node.next=apre_nod.next
      apre_nod.next=node
    }
  }
  // supprimer des éléments
  supprimer(elements){
    var supprimer_nod = this.search(elements);
    let temp=this.list
    while (temp.next != supprimer_nod) {
      temp=temp.next
    }
    temp.next=temp.next.next
  }

  search(elements){
    var temp=this.list
    while (temp!=null) {
      if(temp.data==elements)
          return temp
      temp=temp.next
      
    }
    return null
  }

  display()
  {
    
      var temp=this.list
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }
}
  
class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }
}

// const list = new LinkedList()
// list.créer(11)
// list.créer(22)
// list.créer(2)
// list.créer(233)
// console.log("List Created...")
// list.display()
// list.supprimer(2)


// // after search
// console.log("After search...")
// var s=list.search(22)
// console.log(s.data)
// // ajouter après les éléments
// console.log("ajouter après les éléments...")
// list.ajouter_apre (13,11)
// list.ajouter_apre (12,13)
// list.ajouter_apre (32,11)
// list.display()
// // supprimer éléments
// console.log("supprimer éléments...")
// list.supprimer (13)
// list.display()
