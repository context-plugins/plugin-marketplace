import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Waiting time to start passive input (in seconds) after start of assistant speech */
export type PassiveInputStart = number;

export const passiveInputStartSchema: Schema<PassiveInputStart> = s.of<PassiveInputStart>(
  s.union([s.float64()]),
);
