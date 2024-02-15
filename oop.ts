interface LoggingInterface{
    log(message:string):void;
}

class ServerLoggingService implements LoggingInterface {
    log(message:string):void{
        // send logs to server
    }
}

class MockServerLoggingService implements LoggingInterface {
    log(message:string):void{
        // send logs to server
    }
}

class FooComponent{
    constructor(private loggingService:ServerLoggingService){}
}

const foo = new FooComponent(new ServerLoggingService())


class BarComponent{
    constructor(private loggingService:LoggingInterface){}
}

// using interface, DIP dependency inversion principle
const bar = new BarComponent(new ServerLoggingService())
const barTest = new BarComponent(new MockServerLoggingService())