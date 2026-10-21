import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  wpayPaytoSimulationOptionsSchema,
  type WpayPaytoSimulationOptions,
} from "../wpay-payto-simulation-options.js";

/** Simulate responses for this resource. */
export type Simulation = WpayPaytoSimulationOptions;

export const simulationSchema: Schema<Simulation> = s.of<Simulation>(
  s.union([s.lazy(() => wpayPaytoSimulationOptionsSchema)]),
);
