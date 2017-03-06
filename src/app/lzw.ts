export class LZW{
  code:string;
  private objectMapping:Object;
  private objectKeys:any = [];
  constructor(code:string){
    this.code = code;
    console.log(this.code);
  }


  getOutput():Object{
    this.objectMapping = this.code.split('').filter((char,index,self)=>self.indexOf(char)===index).reduce((obj, char, index)=>{
          obj[char] = index+1;
          return obj;
        },{});
        for(var i = 0; i < this.code.length;){
          var n = 1;
          var subStr:string;
          while(i + n <= this.code.length && this.objectMapping.hasOwnProperty(this.code.substring(i, i + n))){
              n++;
          }
          subStr = this.code.substring(i, i + n);
          var outputLen = (n-1==0)?(i+n):(i+n-1);
          this.objectKeys.push(`${this.code.substring(i, outputLen)}:${this.objectMapping[this.code.substring(i, outputLen)]}`);

          if(subStr !== ""){
            if(!this.objectMapping.hasOwnProperty(subStr))
              this.objectMapping[this.code.substring(i, i + n)] = Object.keys(this.objectMapping).length + 1;
          }

          i += n-1;
        }
        var retVal = {
          objectMapping: this.objectMapping,
          objectKeys: this.objectKeys
        }
        return retVal ;

  }

  getKeyFromValue(obj,value){
      console.log("Value is", value);
      for(let k in obj){
        console.log(k, obj[k]);
        if(obj[k] === value){
          console.log("returning", obj[k])
          return k;
        }

      }
      return "";
    }

    decodeOutput(encoded, characters){
      this.objectMapping = characters.split('').filter((char,index,self)=>self.indexOf(char)===index).reduce((obj, char, index)=>{
        obj[char] = (index + 1).toString();
        return obj;
      }, {});
      var encodedArray = encoded.split(' ');
      encodedArray.forEach((encoded, index)=>{
        this.objectKeys.push(`${this.getKeyFromValue(this.objectMapping, encodedArray[index])}:${encodedArray[index]}`);
        if(index != 0){
          var tempKey = this.getKeyFromValue(this.objectMapping, encodedArray[index - 1]) + this.getKeyFromValue(this.objectMapping, encodedArray[index]);
          console.log("Tempkey is ", tempKey);
          var n = 1;
          var tempVal = ""
          while(n <= tempKey.length && this.objectMapping.hasOwnProperty(tempKey.substr(0, n))){
            n++;
          }
          if(n != 1)
            this.objectMapping[tempKey.substr(0, n)] = (Object.keys(this.objectMapping).length + 1).toString();
        }
      });
    console.log(this.objectKeys);
    console.log(this.objectMapping);


    var retVal = {
      objectMapping: this.objectMapping,
      objectKeys: this.objectKeys
    }
    return retVal ;
    }
}
