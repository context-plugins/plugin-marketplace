import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the iteration: <code>not_started</code>, <code>running</code>, <code>stopped</code>
 */
export const Status2 = {
  NotStarted: "not_started",
  Running: "running",
  Stopped: "stopped",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
