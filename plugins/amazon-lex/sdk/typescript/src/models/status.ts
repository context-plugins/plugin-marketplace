import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the bot. */
export const Status = {
  Building: "BUILDING",
  Ready: "READY",
  ReadyBasicTesting: "READY_BASIC_TESTING",
  Failed: "FAILED",
  NotBuilt: "NOT_BUILT",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
