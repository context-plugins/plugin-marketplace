import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Retryability = {
  Retryable: "retryable",
  NonRetryable: "non_retryable",
  Unknown: "unknown",
} as const;
export type Retryability = (typeof Retryability)[keyof typeof Retryability] | (string & {});

export const retryabilitySchema: EnumSchema<Retryability> = s.enumOf<Retryability>(Retryability);
