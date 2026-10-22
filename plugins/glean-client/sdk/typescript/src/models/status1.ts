import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of backend generating the answer */
export const Status1 = {
  Computing: "COMPUTING",
  Disabled: "DISABLED",
  Failed: "FAILED",
  NoAnswer: "NO_ANSWER",
  Skipped: "SKIPPED",
  Streaming: "STREAMING",
  Succeeded: "SUCCEEDED",
  Timeout: "TIMEOUT",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
