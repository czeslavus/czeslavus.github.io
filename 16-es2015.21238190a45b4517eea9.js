(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Fu6J:function(e,t,i){"use strict";i.r(t),i.d(t,"LockerPageModule",(function(){return f}));var c=i("TEn/"),o=i("ofXK"),n=i("3Pt+"),r=i("qtYk"),s=i("tyNb"),b=i("fXoL"),a=i("WcP9"),l=i("5+tZ"),u=i("vkgz"),h=i("lJxs"),d=i("cp0P");let g=(()=>{class e{constructor(e){this.ble=e}config(e){this._config=e}connectDevice(){return this.ble.discover$({acceptAllDevices:!0,optionalServices:[this._config.service,this._config.openService]}).pipe(Object(l.a)(e=>(this.gatt=e,Object(d.a)({battery:this.ble.getPrimaryService$(e,this._config.service),open:this.ble.getPrimaryService$(e,this._config.openService)}))),Object(u.a)(e=>{this.batteryService=e.battery,this.openService=e.open,console.log("mamy to!")}))}subscribeToRead(){return this.ble.getCharacteristic$(this.batteryService,this._config.characteristic).pipe(Object(l.a)(e=>this.ble.observeValue$(e)),Object(h.a)(e=>e.getUint8(0)))}changeState(e){const t=new TextEncoder;let i=t.encode("open");return e||(i=t.encode("close")),this.ble.getCharacteristic$(this.openService,this._config.openCharacteristic).pipe(Object(h.a)(e=>this.ble.writeValue$(e,i)))}getDevice(){return this.ble.getDevice$()}stream(){return this.ble.streamValues$().pipe(Object(h.a)(this._config.decoder))}value(){return this.ble.value$({service:this._config.service,characteristic:this._config.characteristic})}testRead(){return this.ble.discover$({acceptAllDevices:!0,optionalServices:[this._config.service]}).pipe(Object(l.a)(e=>(console.log("Pobieram serwis ... ",e),this.ble.getPrimaryService$(e,this._config.service))),Object(l.a)(e=>(console.log("Pobieram dost\u0119p do baterii .... ",e),this.ble.getCharacteristic$(e,this._config.characteristic))),Object(l.a)(e=>(console.log("Czytam warto\u015bci ...",e),this.ble.observeValue$(e))),Object(h.a)(e=>e.getUint8(0)))}disconnectDevice(){this.ble.disconnectDevice()}}return e.\u0275fac=function(t){return new(t||e)(b.Pb(a.a))},e.\u0275prov=b.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const v=[{path:"",component:(()=>{class e{constructor(e,t){this.ble=e,this.bleService=t,this.currentValue=0,this.hasErrorVisible=!1,t.config({decoder:e=>e.getInt8(0),service:"6a4e8bba-a22a-4549-89c8-8eb06c4e6dae",openService:"f72860b3-dfeb-4c98-b2f7-e61276e585dd",characteristic:"ef7eb858-9415-4ac1-82d7-4d9eda7ac01e",openCharacteristic:"digital"})}get device(){return this.bleService.getDevice()}ngOnInit(){this.getDeviceStatus(),this.streamSubscription=this.bleService.stream().subscribe(()=>this.updateValue.bind(this),e=>this.hasError.bind(this))}ngOnDestroy(){this.valuesSubscription.unsubscribe(),this.deviceSubscription.unsubscribe(),this.streamSubscription.unsubscribe()}connectBluetooth(){this.bleService.connectDevice().subscribe(console.log,this.hasError.bind(this))}getDeviceStatus(){this.deviceSubscription=this.bleService.getDevice().subscribe(e=>{e?console.log("Jest device",e):console.log("nie ma device")},this.hasError.bind(this))}disconnectBluetooth(){this.bleService.disconnectDevice()}startRead(){this.bleService.subscribeToRead().subscribe(e=>{this.currentTS=new Date,this.currentValue=e},this.hasError.bind(this))}changeState(e){console.log("Zmieniam stan na ",e),this.bleService.changeState(e).subscribe(console.log,this.hasError.bind(this))}readBattery(){this.bleService.value().subscribe(e=>{this.currentTS=new Date,this.currentValue=e.getInt8(0)},this.hasError.bind(this))}updateValue(e){this.currentTS=new Date,this.currentValue=e}runBluetooth(){this.bleService.testRead().subscribe(e=>{this.currentTS=new Date,this.currentValue=e})}runByPromises(){let e=window.navigator;e.bluetooth?e.bluetooth.requestDevice({filters:[{services:["automation_io"]}]}).then(e=>(console.log("Nazwa: ",e.name),console.log("Id:    ",e.id),console.log("Connected: ",e.gatt.connected),e.gatt.connect())).then(e=>(console.log("Getting Battery Service..."),e.getPrimaryService("automation_io"))).then(e=>(console.log("Getting Battery Level Characteristic..."),e.getCharacteristic("battery_level"))).then(e=>(console.log("Reading Battery Level..."),e.readValue())).then(e=>{let t=e.getUint8(0);console.log("> Battery Level is "+t+"%")}).catch(e=>{console.warn("Argh!",e)}):console.log("Nie ma API Bluetooth w przegl\u0105darce")}hasError(e){console.error("M\xf3j error",e),this.hasErrorVisible=!0,this.errorMessage=e}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(a.a),b.Jb(g))},e.\u0275cmp=b.Db({type:e,selectors:[["app-locker"]],decls:59,vars:6,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"hidden"],["color","danger"],["color","danger","name","close-circle-outline",1,"ion-float-right"],["expand","block",3,"click"]],template:function(e,t){1&e&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.bc(3," Blokada "),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content",1),b.Mb(5,"ion-header",2),b.Mb(6,"ion-toolbar"),b.Mb(7,"ion-title",3),b.bc(8,"Blokada"),b.Lb(),b.Lb(),b.Lb(),b.Mb(9,"ion-grid"),b.Mb(10,"ion-row",4),b.Mb(11,"ion-col"),b.Mb(12,"ion-text",5),b.bc(13),b.Lb(),b.Kb(14,"ion-icon",6),b.Lb(),b.Lb(),b.Mb(15,"ion-row"),b.Mb(16,"ion-col"),b.bc(17,"Akumulator"),b.Lb(),b.Mb(18,"ion-col"),b.bc(19),b.Lb(),b.Mb(20,"ion-col"),b.bc(21),b.Lb(),b.Lb(),b.Mb(22,"ion-row"),b.Mb(23,"ion-col"),b.bc(24," Status "),b.Lb(),b.Kb(25,"ion-col"),b.Kb(26,"ion-col"),b.Lb(),b.Mb(27,"ion-row"),b.Mb(28,"ion-col"),b.bc(29," Zaj\u0119to\u015b\u0107 "),b.Lb(),b.Kb(30,"ion-col"),b.Kb(31,"ion-col"),b.Lb(),b.Mb(32,"ion-row"),b.Mb(33,"ion-col"),b.Mb(34,"ion-button",7),b.Tb("click",(function(){return t.runBluetooth()})),b.bc(35,"Notyfikacje"),b.Lb(),b.Lb(),b.Mb(36,"ion-col"),b.Mb(37,"ion-button",7),b.Tb("click",(function(){return t.readBattery()})),b.bc(38,"Czytaj"),b.Lb(),b.Lb(),b.Mb(39,"ion-col"),b.Mb(40,"ion-button",7),b.Tb("click",(function(){return t.disconnectBluetooth()})),b.bc(41,"Roz\u0142\u0105cz"),b.Lb(),b.Lb(),b.Lb(),b.Mb(42,"ion-row"),b.Mb(43,"ion-col"),b.Mb(44,"ion-button",7),b.Tb("click",(function(){return t.connectBluetooth()})),b.bc(45,"Po\u0142\u0105cz"),b.Lb(),b.Lb(),b.Mb(46,"ion-col"),b.Mb(47,"ion-button",7),b.Tb("click",(function(){return t.disconnectBluetooth()})),b.bc(48,"Roz\u0142\u0105cz"),b.Lb(),b.Lb(),b.Lb(),b.Mb(49,"ion-row"),b.Mb(50,"ion-col"),b.Mb(51,"ion-button",7),b.Tb("click",(function(){return t.startRead()})),b.bc(52,"Czytaj"),b.Lb(),b.Lb(),b.Mb(53,"ion-col"),b.Mb(54,"ion-button",7),b.Tb("click",(function(){return t.changeState(!0)})),b.bc(55,"Otw\xf3rz"),b.Lb(),b.Lb(),b.Mb(56,"ion-col"),b.Mb(57,"ion-button",7),b.Tb("click",(function(){return t.changeState(!1)})),b.bc(58,"Zamknij"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.Xb("translucent",!0),b.zb(4),b.Xb("fullscreen",!0),b.zb(6),b.Xb("hidden",!t.hasErrorVisible),b.zb(3),b.cc(t.errorMessage),b.zb(6),b.cc(t.currentValue),b.zb(2),b.cc(t.currentTS))},directives:[c.f,c.p,c.o,c.d,c.e,c.j,c.c,c.n,c.g,c.b],styles:[""]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[s.i.forChild(v)],s.i]}),e})(),f=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[c.q,o.b,n.a,r.a,p]]}),e})()}}]);