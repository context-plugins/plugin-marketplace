import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Strategy for allocating robots to the job */
export const Strategy = {
  All: "All",
  Specific: "Specific",
  JobsCount: "JobsCount",
  RobotIds: "RobotIds",
} as const;
export type Strategy = (typeof Strategy)[keyof typeof Strategy] | (string & {});

export const strategySchema: EnumSchema<Strategy> = s.enumOf<Strategy>(Strategy);
