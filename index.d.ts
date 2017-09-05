// Type definitions for koa-validate v0.2 https://github.com/RocksonZeta/koa-validate
// Project: @types/koa-valiate
// Definitions by: lessu <https://github.com/lessu/types-koa-validate>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**================================
 * Usage
 * import * as Koa from "koa"
 * import bodyparser = require("koa-bodyparser");
 * import Validate = require("koa-validate");
 * 
 * let app = new Koa();
 * app.use(bodyparser());
 * Validate(app);
 * 
 * ================================
 */

import * as Validator from "validator";

declare enum UUIDVersion{
	Version3 = 3,
	Version4 = 4,
	Version5 = 5
}
declare enum ISBNVersion{
	Version10 = 10,
	Version13 = 13
}
declare interface FileObject{
	//"image/jpeg"
	type	: string,
	path	: string,
	name	: string,
	size	: string,
	mtile	: string
}
declare interface FileTargetFunction{
	(fileObject:FileObject,fieldName:string,context:any) : string;
}
declare interface FileAfterFunction{
	(fileObject:FileObject,fieldName:string,context:any) : void;
}

export = KoaValidate;
// App is a Koa ,but ts will raise a type mismatch error,it is related to `declare module "koa"`,may be it'a bug for typescript.
declare function KoaValidate(app : Koa):void;

declare namespace KoaValidate{

	export class Validator{
		constructor(context:any, key:string, value:any, exists:boolean, params :any, goOn:boolean);
			
		// Access validator status:

		// - add an error to validator errors.
		addError	: (tip:string|any) => boolean;
		// - check if validator has errors.
		hasError	: () => boolean;
		// - the value of current validator.
		value 		: any;


		// - the param may not in the params.if the param not exists,it has no error,no matter whether have other checker or not.
		optional	: ()=>Validator;
		// - the params can be a empty string.
		empty		: (tip?:string|any)=>Validator;
		// - check if the param is not empty.
		notEmpty	: (tip?:string|any)=>Validator;
		// - check if the param is not blank,use /^\s*$/gi reg to check.
		notBlank	: (tip?:string|any)=>Validator;
		// - pattern must be a RegExp instance ,eg. /abc/i
		match		: (pattern:RegExp,tip?:string|any)=>Validator;
		// - pattern must be a RegExp instance ,eg. /xyz/i
		notMatch	: (pattern:RegExp,tip?:string|any)=>Validator;
		// - if assertion is false,the asserting failed.
		ensure		: (assertion:boolean, tip?:string|any, shouldBail?:boolean)=>Validator;
		// - if assertion is true,the asserting failed.
		ensureNot	: (assertion:boolean, tip?:string|any, shouldBail?:boolean)=>Validator;
		// - check if the param is integer.
		isInt		: (tip?:string|any,options?:ValidatorJS.IsIntOptions)=>Validator;
		// - check if the param is float.
		isFloat		: (tip?:string|any,options?:ValidatorJS.IsFloatOptions)=>Validator;
		// - check the param length.
		isLength	: (min:number,max?:number,tip?:string|any)=>Validator;
		// - the abbreviation of isLength.
		len			: (min:number,max?:number,tip?:string|any)=>Validator;
		// - check if the param is in the array.
		isIn		: (arr:any[],tip?:string|any)=>Validator;
		// - the abbreviation of isIn.
		in			: (arr:any[],tip?:string|any)=>Validator;
		// - check if the param equal to the value.
		eq			: (value:any,tip?:string|any)=>Validator;
		// - check if the param not equal to the value.
		neq			: (value:any,tip?:string|any)=>Validator;
		// - check if the param great then the value.
		gt			: (num:number,tip?:string|any)=>Validator;
		// - check if the param less then the value.
		lt			: (num:number,tip?:string|any)=>Validator;
		// - check if the param great then or equal the value.
		ge			: (num:number,tip?:string|any)=>Validator;
		// - check if the param less then or equal the value.
		le			: (num:number,tip?:string|any)=>Validator;
		// - check if the param contains the str.
		contains	: (str:string,tip?:string|any)=>Validator;
		// - check if the param not contains the str.
		notContains	: (str:string,tip?:string|any)=>Validator;
		// - check if the param is an email.
		isEmail		: (tip?:string|any,options?:ValidatorJS.IsEmailOptions)=>Validator;
		// - check if the param is an URL.
		isUrl		: (tip?:string|any,options?:ValidatorJS.IsURLOptions)=>Validator;
		// - check if the param is an IP (version 4 or 6).
		isIp		: (tip?:string|any)=>Validator;
		// - check if the param contains only letters (a-zA-Z).
		isAlpha		: (tip?:string|any,locale?:ValidatorJS.AlphaLocale)=>Validator;
		// - check if the param contains only numbers.
		isNumeric	: (tip?:string|any)=>Validator;
		// - check if the param contains only letters and numbers.
		isAlphanumeric:(tip?:string|any,locale?:ValidatorJS.AlphanumericLocale)=>Validator;
		// - check if a param is base64 encoded.
		isBase64	: (tip?:string|any)=>Validator;
		// - check if the param is a hexadecimal number.
		isHexadecimal:(tip?:string|any)=>Validator;
		// - check if the param is a hexadecimal color.
		isHexColor	: (tip?:string|any)=>Validator;
		// - check if the param is lowercase.
		isLowercase	: (tip?:string|any)=>Validator;
		// - check if the param is uppercase.
		isUppercase	: (tip?:string|any)=>Validator;
		// - check if the param is a number that's divisible by another.
		isDivisibleBy:(num:number,tip?:string|any)=>Validator;
		// - check if the param is null.
		isNull		: (tip?:string|any)=>Validator;
		// - check if the param's length (in bytes) falls in a range.
		isByteLength: (min:number,max:number,tip?:string|any)=>Validator;
		// - the abbreviation of isByteLength.
		byteLength	: (min:number,max:number,tip?:string|any)=>Validator;
		// - check if the param is a UUID (version 3, 4 or 5).
		isUUID		: (tip?:string|any,version?:UUIDVersion)=>Validator;
		// - check if the param is a date.
		isDate		: (tip?:string|any)=>Validator;
		// - check if the param is a date that's after the specified date.
		isAfter		: (date:Date,tip?:string|any)=>Validator;
		// - check if the param is a date that's before the specified date.
		isBefore	: (date:Date,tip?:string|any)=>Validator;
		// - check if the param is a credit card.
		isCreditCard: (tip?:string|any)=>Validator;
		// - check if the param is an ISBN (version 10 or 13).
		isISBN		: (tip?:string|any,version?:ISBNVersion)=>Validator;
		// - check if the param is valid JSON (note: uses JSON.parse).
		isJSON		: (tip?:string|any)=>Validator;
		// - check if the param contains one or more multibyte chars.
		isMultibyte : (tip?:string|any)=>Validator;
		// - check if the param contains ASCII chars only.
		isAscii		: (tip?:string|any)=>Validator;
		// - check if the param contains any full-width chars.
		isFullWidth	: (tip?:string|any)=>Validator;
		// - check if the param contains any half-width chars.
		isHalfWidth	: (tip?:string|any)=>Validator;
		// - check if the param contains a mixture of full and half-width chars
		isVariableWidth:(tip?:string|any)=>Validator;
		// - check if the param contains any surrogate pairs chars.
		isSurrogatePair:(tip?:string|any)=>Validator;
		// - check if the param is a currency.
		isCurrency	: (tip?:string|any,options?:ValidatorJS.IsCurrencyOptions)=>Validator;
		// - check if the param is a data uri.
		isDataURI	: (tip?:string|any)=>Validator;
		// - check if the param is a mobile phone.
		isMobilePhone:(tip?:string|any,locale?:ValidatorJS.MobilePhoneLocale)=>Validator;
		// - check if the param is a ISO8601 string. eg.2004-05-03
		isISO8601	: (tip?:string|any)=>Validator;
		// - check if the param is a MAC address.eg.C8:3A:35:CC:ED:80
		isMACAddress: (tip?:string|any)=>Validator;
		// - check if the param is a ISIN.
		isISIN		: (tip?:string|any)=>Validator;
		// - check if the param is a fully qualified domain name. eg.www.google.com
		isFQDN		: (tip?:string|any,options?:ValidatorJS.IsFQDNOptions)=>Validator;












		// - if the param not exits or is an empty string, it will take the default value.
		default		: (value:any)=>Validator;
		// - convert param to js Date object.
		toDate		: ()=>Validator;
		// - convert param to integer.radix for toInt,options for isInt.
		toInt		: (tip?:string|any,radix?:number,options?:ValidatorJS.IsIntOptions)=>Validator;
		// - convert param to float.
		toFloat		: (tip?:string|any)=>Validator;
		// - convert param to lowercase.
		toLowercase	: ()=>Validator;
		// - same as toLowercase.
		toLow		: ()=>Validator;
		// - convert param to uppercase.
		toUppercase	: ()=>Validator;
		// - same as toUppercase.
		toUp		: ()=>Validator;
		// - convert the param to a boolean. Everything except for '0', 'false' and '' returns true. In strict mode only '1' and 'true' return true.
		toBoolean	: ()=>Validator;
		// - convert param to json object.
		toJson		: (tip?:string|any)=>Validator;
		// - trim characters (whitespace by default) from both sides of the param.
		trim		: (chars?:string)=>Validator;
		// - trim characters from the left-side of the param.
		ltrim		: (chars?:string)=>Validator;
		// - trim characters from the right-side of the param.
		rtrim		: (chars?:string)=>Validator;
		// - replace <, >, & and " with HTML entities.
		escape		: ()=>Validator;
		// - remove characters with a numerical value < 32 and 127, mostly control characters.
		stripLow	: ()=>Validator;
		// - remove characters that do not appear in the whitelist.
		whitelist	: (value: string | string[])=>Validator;
		// - remove characters that appear in the blacklist.
		blacklist	: (value: string | string[])=>Validator;
		// - ref mdn encodeURI
		encodeURI	: ()=>Validator;
		// - ref mdn decodeURI
		decodeURI	: (tip?:string|any)=>Validator;
		// - ref mdn encodeURIComponent
		encodeURIComponent : ()=>Validator;
		// - ref mdn decodeURIComponent
		decodeURIComponent : (tip?:string|any)=>Validator;
		// - the same as String replace
		replace		: (find : RegExp | string, replace:string | Function)=>Validator;
		// - clone current value to the new key, if newValue supplied , use it. eg. this.checkBody('v1').clone('md5').md5(); then your can use this.request.body.md5.
		clone		: (newKey:string,newValue?:any)=>Validator;
		// - encode current value to base64 string.
		encodeBase64: ()=>Validator;
		// - decode current base64 to a normal string,if inBuffer is true , the value will be a Buffer.
		decodeBase64: (inBuffer?:boolean,tip?:string|any)=>Validator;
		// - hash current value use specified algorithm and encoding(if supplied , default is 'hex'). ref hash
		hash		: (alg : string, encoding?:string)=>Validator;
		// - md5 current value into hex string.
		md5			: ()=>Validator;
		// - sha1 current value into hex string.
		sha1		: ()=>Validator
	}

	export class FileValidator{
		//- current file field can to be a empty file.
		empty:() => FileValidator;
		// - current file field can not to be a empty file.
		notEmpty:(tip?:string|any) => FileValidator;
		// - limit the file size.
		size:(min:number,max:number,tip?:string|any) => FileValidator;
		// - check the file's contentType with regular expression.
		contentTypeMatch:(reg:RegExp,tip?:string|any) => FileValidator;
		// - check the file's contentType if is image content type.)
		isImageContentType:(tip?:string|any) => FileValidator;
		// - check the file's name with regular expression.
		fileNameMatch:(reg:RegExp,tip?:string|any) => FileValidator;
		// - check the suffix of file's if in specified arr. arr eg. ['png','jpg']
		suffixIn:(arr:string[],tip?:string|any) => FileValidator;

		// - move upload file to the target location. target can be a string or function or function*.if target end with '/' or '\',the target will be deemed as directory. target function interface:string function(fileObject,fieldName,context).this function will return a string of the target file. afterMove:it can be a function or function*.interface:function(fileObject,fieldName,context)
		move:(target:string | FileTargetFunction, afterMove?:FileAfterFunction) => IterableIterator<FileValidator>;
		// - move upload file to the target location. target can be a string or function or function*. target function interface:function (fileObject,fieldName,context) . afterCopy:it can be a function or function*.interface:function(fileObject,fieldName,context)
		copy:(target:string | FileTargetFunction, afterCopy?:FileAfterFunction) => IterableIterator<FileValidator>;
		// - delete upload file.
		delete:() => IterableIterator<FileValidator>
	}
}


declare interface ValidateError{
	[key:string] : any;
}

import * as Koa from "koa";
declare module "koa" {
	
	interface Context{
		// fieldName => error tip
		errors		: [any | string | ValidateError],
		// - check POST body.,transFn see json-path.it will not use json path (https://github.com/flitbit/json-path#more-power) if transFn is false.
		checkBody 	: (fieldName:string,transFn?:boolean)=>KoaValidate.Validator,
		// - check GET query.,transFn see json-path.it will not use json path (https://github.com/flitbit/json-path#more-power) if transFn is false.
		checkQuery	: (fieldName:string,transFn?:boolean)=>KoaValidate.Validator,
		// - check the params in the urls.
		checkParams	: (fieldName:string)=>KoaValidate.Validator,
		// - check the file object, if you use koa-body.this function will return FileValidator object. deleteOnCheckFailed default value is true
		checkFile	: (fieldName:string,deleteOnCheckFailed?:boolean)=>KoaValidate.FileValidator,
		// - check the params in the request http header.
    	checkHeader	: (fieldName:string)=>KoaValidate.Validator
  	}
}