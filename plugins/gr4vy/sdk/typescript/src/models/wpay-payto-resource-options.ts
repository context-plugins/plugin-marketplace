import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simulationSchema, type Simulation } from "./unions/simulation.js";

export type WpayPaytoResourceOptions = {
  /** Simulate responses for this resource. */
  simulation?: Simulation;
};

export const wpayPaytoResourceOptionsSchema: Schema<WpayPaytoResourceOptions> =
  s.object<WpayPaytoResourceOptions>({
    simulation: s.optional(s.lazy(() => simulationSchema)),
  });
