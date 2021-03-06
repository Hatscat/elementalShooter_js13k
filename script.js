function INIT(){
	for(prop in bCtx=(buffer=canvas.cloneNode()).getContext('2d')) // canvas buffer, for better perf
		bCtx[prop[0]+(prop[6]||'')]=bCtx[prop]; 

	graphicalElement=new Int16Array(99);
	e=[];
	e[0]={x:9,y:9,z:9,r:9,p:5,v:1}; // in example, for tests
	x=y=z=9; // in example, for tests

	R();
	F(s=P=p=O=o=0);
}

function F(T){
	d=T-o; // framerate independance, to remove if space is needed
	o=T;
	console.log(d)


	// logic here


	b=C[l='fillStyle']='#000';
	L=H*.9
	C.fc(0,0,W,U?H:L);
	if(U){
		for(a=['c20','abc','25c','842'],i=4;i--;C.fc(c,p%4==i?L:H*.97,v,H)){
			g=C.cL(c=W-(i+1)*(v=W*.1),0,c+v,0);g.q=g.addColorStop;g.q(0,b);g.q(.5,'#'+a[i]);g.q(1,b);C[l]=g
		}
		C.font=h*2+'px arial';
		C[l]='tan';
		C.fx(s,0,H)
	}

	//for(n=w*h;n--;C.fc(X*S+(N=8-(M=Math.random()*S)/2),Y*S+N,M,M)){
	for(n=w*h;n--;C.fc(X*S+(N=8-(M=dt/dm*S)/2),Y*S+N,M,M)){
		rx=X=n%w;
		ry=Y=n/w|0;
		dz=rz=0;
		q=(c=rx-w/2)*c+(v=ry-h/2)*c+h;
		dx=rx/q;
		dy=ry/q; // ray vector normalized
		dt=dm=3e3;
		for(i=w;i--;){
			j=J([12][]);
			rx+=dx*1;
			ry+=dy*1;
			rz+=dz*1;
		}
		C[l]='#0a9'
	}
	//for(X=w;X--;)for(Y=h;Y--;C.fc(X*S+(N=4-(M=Math.random()*S)/2),Y*S+N,M,M))C[l]='#0a9'; // double loops is smaller but maybe slower (?)
	canvas.getContext('2d').drawImage(buffer,U=0,0);
	requestAnimationFrame(F)
}

onmousedown=function(){
	P=1
}

onmouseup=function(){
	p+=U=1;
	canvas.f=canvas['r'+(r='equestFullscreen')]||canvas.mozRequestFullScreen||canvas['webkitR'+r];
	canvas.p=canvas['r'+(r='equestPointerLock')]||canvas['mozR'+r]||canvas['webkitR'+r];
	P=canvas.f();
	canvas.p()
}

onmousemove=function(_){
	K=(u=_.clientX)-O;
	O=u
}

onkeydown=function(_){
	K=-((k=_.keyCode)==37)||k==39|0; // arrow keys buttons
	P=k==32 // space button
}

onkeyup=function(_){
	p+=U=!(P=_.keyCode!=32)
}

onresize=R;

function R(){ // resize
	U=w=(W=canvas.width=buffer.width=innerWidth)/(S=16)|0;
	h=(H=canvas.height=buffer.height=innerHeight)/S*.9|0
}

function J(_,$){ // get distance between 2 vectors
	for(j=0,i=3;i--;j+=t)t=(t=_[i]-$[i])*t;
	return j
}

function ship(){

}

function ground(){

}

function earth(){

}

function water(){

}

function air(){
	
}

function fire(){

}
