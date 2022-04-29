import { API } from 'homebridge';

//import { PLATFORM_NAME } from './settings';
//import { ExampleHomebridgePlatform } from './platform';
import { TestAccessory } from './customAccessory';

/**
 * This method registers the platform with Homebridge
 */
export = (api: API) => {
  api.registerAccessory('TestAccessory', TestAccessory);
};
