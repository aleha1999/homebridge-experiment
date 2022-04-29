import { AccessoryConfig, AccessoryPlugin, API, Logging, Service } from 'homebridge';

export class TestAccessory implements AccessoryPlugin {

  log: Logging;
  config: AccessoryConfig;
  api: API;

  informationService: Service;
  movementService: Service;

  constructor(log: Logging, config: AccessoryConfig, api: API) {
    this.log = log;
    this.config = config;
    this.api = api;

    this.informationService = new this.api.hap.Service.AccessoryInformation()
      .setCharacteristic(this.api.hap.Characteristic.Manufacturer, 'Custom Manufacturer')
      .setCharacteristic(this.api.hap.Characteristic.Model, 'Custom Model');

    this.movementService = new this.api.hap.Service.MotionSensor(this.config.name);
    this.movementService.getCharacteristic(api.hap.Characteristic.MotionDetected)
      .onGet(this.handleMotionDetected.bind(this));
  }

  handleMotionDetected() {
    return 1;
  }

  getServices(): Service[] {
    return [
      this.movementService,
      this.informationService,
    ];
  }
}