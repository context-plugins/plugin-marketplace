import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Overall health status of the Source or Destination. */
export const HealthOptionsStatus = {
  Green: "Green",
  Red: "Red",
  Unknown: "Unknown",
  Yellow: "Yellow",
} as const;
export type HealthOptionsStatus =
  | (typeof HealthOptionsStatus)[keyof typeof HealthOptionsStatus]
  | (string & {});

export const healthOptionsStatusSchema: EnumSchema<HealthOptionsStatus> =
  s.enumOf<HealthOptionsStatus>(HealthOptionsStatus);
