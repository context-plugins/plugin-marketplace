import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { delaySchema, type Delay } from "./unions/delay.js";
import { simulateSchema, type Simulate } from "./unions/simulate.js";

export type WpayPaytoSimulationOptions = {
  /**
   * The simulation being requested. Please refer to the developer guide for a list of all available
   * simulations.
   */
  simulate?: Simulate;
  /** The delay in seconds before the requested simulation is executed. */
  delay?: Delay;
};

export const wpayPaytoSimulationOptionsSchema: Schema<WpayPaytoSimulationOptions> =
  s.object<WpayPaytoSimulationOptions>({
    simulate: s.optional(s.lazy(() => simulateSchema)),
    delay: s.optional(s.lazy(() => delaySchema)),
  });
