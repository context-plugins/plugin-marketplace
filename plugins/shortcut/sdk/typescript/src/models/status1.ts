import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The health status of the Objective. */
export const Status1 = {
  AtRisk: "At Risk",
  OnTrack: "On Track",
  OffTrack: "Off Track",
  NoHealth: "No Health",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
