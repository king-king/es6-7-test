/**
 * Created by acer on 2017/4/9.
 */

let promise = new Promise( function ( resolve , reject ) {
	console.log( "executor" );
	// reject和resolve不能共存，如果共存，则谁先执行谁起作用
	reject();
	resolve();
	console.log( "executor last" );
} );

promise.then( function () {
	console.log( "resolved" );
} , function () {
	console.log( "rejected" );
} );

console.log( "code 1" );