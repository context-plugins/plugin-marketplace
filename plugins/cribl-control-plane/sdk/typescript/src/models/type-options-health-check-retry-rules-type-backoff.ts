import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsHealthCheckRetryRulesTypeBackoff = {
  Backoff: "backoff",
} as const;
export type TypeOptionsHealthCheckRetryRulesTypeBackoff =
  | (typeof TypeOptionsHealthCheckRetryRulesTypeBackoff)[keyof typeof TypeOptionsHealthCheckRetryRulesTypeBackoff]
  | (string & {});

export const typeOptionsHealthCheckRetryRulesTypeBackoffSchema: EnumSchema<TypeOptionsHealthCheckRetryRulesTypeBackoff> =
  s.enumOf<TypeOptionsHealthCheckRetryRulesTypeBackoff>(TypeOptionsHealthCheckRetryRulesTypeBackoff);
