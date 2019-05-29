//采用二维数组来解决
module.exports = function main(numberString) {
        //获取字符串长度
        let length = numberString.length;
        //创建数组来存放各个字母的lcd一维数组
        let list = new Array(length);
        //将数字串转化为对应的lcd一维数组
        for(let i=0;i<length;i++){
            let a = new Array(3);
            switch (numberString.charAt(i)) {
                case "0": a=["._.","|.|","|_|"];break;
                case "1": a=["...","..|","..|"];break;
                case "2": a=["._.","._|","|_."];break;
                case "3": a=["._.","._|","._|"];break;
                case "4": a=["...","|_|","..|"];break;
                case "5": a=["._.","|_.","._|"];break;
                case "6": a=["._.","|_.","|_|"];break;
                case "7": a=["._.","..|","..|"];break;
                case "8": a=["._.","|_|","|_|"];break;
                case "9": a=["._.","|_|","..|"];break;
            }
            list[i] = a;
        }
        //result记录输出结果
        let result = "";
        for(let i=0;i<3;i++){
            for(let j=0;j<length;j++){
                result+=list[j][i];
                //空格和换行
                if(j<length-1){
                    result += " ";
                }else {
                    result += "\n";
                }
            }
        }
        return result;
    };
