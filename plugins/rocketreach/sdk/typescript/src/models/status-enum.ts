import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusEnum = {
  Complete: "complete",
  Progress: "progress",
  Searching: "searching",
  NotQueued: "not queued",
} as const;
export type StatusEnum = (typeof StatusEnum)[keyof typeof StatusEnum] | (string & {});

export const statusEnumSchema: EnumSchema<StatusEnum> = s.enumOf<StatusEnum>(StatusEnum);
