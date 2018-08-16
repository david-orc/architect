import Legend from './Legend';

const _noop = ()=>{};

export default {
  component: Legend,
  props: {
    mainTitle:"test",
    mainDescription:"This is a description",
    legendItems:[
      {
        title:"Yup", 
        color:"green", 
        description:"Describe an item", 
      }
    ],
    add:_noop,
    del:_noop,
    updateHeader:_noop,
    update:_noop
  }
};