declare var exports: Exports;
declare class Exports {
    public handler: Function;
}
interface Context {
    done(err: any, value: string): void;
    invokeid: string;
}
