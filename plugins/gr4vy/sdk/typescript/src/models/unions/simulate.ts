import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The simulation being requested. Please refer to the developer guide for a list of all available
 * simulations.
 */
export type Simulate = string;

export const simulateSchema: Schema<Simulate> = s.of<Simulate>(s.union([s.string()]));
