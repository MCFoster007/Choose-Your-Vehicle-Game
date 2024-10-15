// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
// import { constructor } from "assert";
// import Vehicle from "./Vehicle.js";

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;
  startCli: any;


  

  // TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car| Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }




  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void  {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle: { vin: any; make: any; model: any; }) => {
            return {
              name:( `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`),
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers: { selectedVehicleVin: string | undefined; }) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }
  performActions() {
    throw new Error("Method not implemented.");
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers: { vehicleType: string; createCar: any; createTruck: any; createMotorbike: any; }) => { 
        // if (answers.vehicleType: string, createCar: () => void;
        //  createTruck: () => void; 
        //  createMotorbike: () => void; }) => {

        if (answers.vehicleType === 'Car') {
          // create a car
          return this.createVehicle = (answers.createCar);
        } else if 
          (answers.vehicleType === 'Truck') {
            return this.createVehicle = (answers.createTruck);
          } else if 
            (answers.vehicleType === 'Motorbike'){
              return this.createVehicle = (answers.createMotorbike);
            };
            
          }
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type
      });
  

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      // { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; }
      .then((answers: { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; }) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          .then((answers: { color: any; make: any; model: any; year: string; weight: string; topSpeed: string; towingCapacity: string; }) => {
            const truck = new Truck(
              Cli.generateVin(), 
              answers.color,
              answers.make,
              answers.model,
              parseInt(answers.year),
              parseInt(answers.weight),
              parseInt(answers.topSpeed),
              parseInt(answers.towingCapacity),      
              // Ensure you include towing capacity if needed
            []
            );
            // Push the truck to the vehicles array
            this.vehicles.push(truck);
            // Set the selectedVehicleVin to the vin of the truck
            this.selectedVehicleVin = truck.vin;
            // Perform actions on the truck
            this.performActions();
          });
        }
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        // TODO: push the truck to the vehicles array
        // TODO: set the selectedVehicleVin to the vin of the truck
        // TODO: perform actions on the truck

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      
        .then((answers: { color: string; make: string; model: string; year: string; weight: string; topSpeed: string; towingCapacity: string; }) => {
          const motorbike = new Motorbike(
            Cli.generateVin(), 
            answers.color,
            answers.make,
            answers.model,
            parseInt(answers.year),
            parseInt(answers.weight),
            parseInt(answers.topSpeed),
            parseInt(answers.towingCapacity),
            [] // Ensure you include towing capacity if needed
          );
          // Push the truck to the vehicles array
          this.vehicles.push(motorbike);
          
          // Set the selectedVehicleVin to the vin of the truck
          this.selectedVehicleVin = motorbike.vin;
          // Perform actions on the truck
          this.performActions();
        });

        // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        // TODO: push the motorbike to the vehicles array
        // TODO: set the selectedVehicleVin to the vin of the motorbike
        // TODO: perform actions on the motorbike
      
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle: { vin: any; make: any; model: any; }) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers: { vehicleToTow: { vin: any; make: any; model: any; }; }) => {
        // Check if the selected vehicle is the truck
        if (answers.vehicleToTow.vin === this.selectedVehicleVin) {
          console.log('Truck cannot tow itself. Select another vehicle.');
          this.performActions(); // Call to perform actions again for user to select another vehicle
        } else {
          console.log(`The ${answers.vehicleToTow.make} ${answers.vehicleToTow.model} is ready to tow`);
          
          // Assuming this.vehicles is an array of vehicle objects
          for (let i = 0; i < this.vehicles.length; i++) {
            // Check if the vehicle is a Truck
            if (this.vehicles[i] instanceof Truck) {
              // Perform actions specific to Truck if needed
            }
          }
        }
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers: { action: string; }) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. 
        //Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. 
        //After calling the findVehicleToTow method, you will need to return to avoid instantly calling 
        //the performActions method again since findVehicleToTow is asynchronous.
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        function performActions(selectedVehicle: any)) {
          if (selectedVehicle.type === 'truck') {
  
              findVehicleToTow(selectedVehicle)
                  .then(() => {
                      // You can handle the result here if needed
                  });
              return; // Return to avoid calling performActions again immediately
          }
      
          if (selectedVehicle.type === 'motorbike') {
              // Perform the wheelie action
              performWheelie(selectedVehicle);
              return; // Return after performing the wheelie
          }
      
        }
         else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions(selectedVehicle);
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers: { CreateOrSelect: string; }) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;

function createCar() {
  throw new Error("Function not implemented.");
}


function createTruck() {
  throw new Error("Function not implemented.");
}


function createMotorbike() {
  throw new Error("Function not implemented.");
}


function findVehicleToTow() {
  throw new Error("Function not implemented.");
}


function performActions() {
  throw new Error("Function not implemented.");
}


function performWheelie(selectedVehicle: any) {
  throw new Error("Function not implemented.");
}


function startCli() {
  throw new Error("Function not implemented.");
}
function answers(value: any) {
  throw new Error("Function not implemented.");
}

