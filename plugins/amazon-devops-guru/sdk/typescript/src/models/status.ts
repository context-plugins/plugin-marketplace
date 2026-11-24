import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of a proactive anomaly. */
export const Status = {
  Ongoing: "ONGOING",
  Closed: "CLOSED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
