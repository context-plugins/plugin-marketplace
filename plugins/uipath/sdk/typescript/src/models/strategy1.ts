import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Stop strategy. SoftStop waits for the current activity to complete before stopping; Kill
 * immediately terminates the robot process.
 */
export const Strategy1 = {
  SoftStop: "SoftStop",
  Kill: "Kill",
} as const;
export type Strategy1 = (typeof Strategy1)[keyof typeof Strategy1] | (string & {});

export const strategy1Schema: EnumSchema<Strategy1> = s.enumOf<Strategy1>(Strategy1);
