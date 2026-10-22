import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Health state: <code>healthy</code>, <code>standby</code>, or <code>shutting down</code>. */
export const Status1 = {
  Healthy: "healthy",
  ShuttingDown: "shutting down",
  Standby: "standby",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
