import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The health status of the Epic or Objective. */
export const Status2 = {
  AtRisk: "At Risk",
  OnTrack: "On Track",
  OffTrack: "Off Track",
  NoHealth: "No Health",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
