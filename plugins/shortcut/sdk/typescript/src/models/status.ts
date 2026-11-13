import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The health status of the Epic. */
export const Status = {
  AtRisk: "At Risk",
  OnTrack: "On Track",
  OffTrack: "Off Track",
  NoHealth: "No Health",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
