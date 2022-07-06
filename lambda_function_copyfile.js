const aws = require("aws-sdk");

exports.handler = (event, context, callback) => { 
let s3 = new aws.s3();
let sourceBucket = "mysourcesbucket";
let destinationBucket = "mydestinationsbucket";
let objectKey = event.Records[0].s3.object.key;
let copySource =encodeURI(sourceBucket + "/" + objectKey );
let copyParams = {Bucket:destinationBucket, CopySource:copySource, Key:objectKey};
s3.copyobject(copyParams, function(err,data){

if (err) {
    
    console.log(err,err.stack);
}
else{
    console.log("s3 object copy sucessful.");
}

});

};