/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
*
* El patrón nos permite producir distintos tipos y representaciones
* de un objeto empleando el mismo código de construcción.
*
* * Es útil cuando necesitamos construir un objeto complejo con muchas partes
* * y queremos que el proceso de construcción sea independiente de las partes
* * que lo componen.
*
* https://refactoring.guru/es/design-patterns/builder
*/

import { COLORS } from '../helpers/colors.ts';
class Computer {
    public cpu: string = "cpu - not defined";   
    public ram: string = "ram - not defined";
    public storage: string = "storage - not defined";
    public gpu?: string;

    displayConfiguration() {
        console.log(`Configuration: 
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Storage: ${this.storage}
            GPU: ${this.gpu}
        `);
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;    
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build() {
        return this.computer;
    }
}

function main() {
    const basicComputer: Computer = new ComputerBuilder()
        .setCPU("Intel i7")
        .setRAM("16GB")
        .setStorage("1TB")
        .setGPU("Nvidia RTX 3080")
        .build();


    const myDreamComputer: Computer = new ComputerBuilder()
        .setCPU("Intel i9")
        .setRAM("64GB")
        .setStorage("2TB")
        .setGPU("Nvidia RTX 3090")
        .build();

    console.log('%cComputer:', COLORS.red);

    basicComputer.displayConfiguration();
    myDreamComputer.displayConfiguration();
}

main();