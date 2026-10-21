import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsHealthCheckRetryRulesTypeNone = {
  None: "none",
} as const;
export type TypeOptionsHealthCheckRetryRulesTypeNone =
  | (typeof TypeOptionsHealthCheckRetryRulesTypeNone)[keyof typeof TypeOptionsHealthCheckRetryRulesTypeNone]
  | (string & {});

export const typeOptionsHealthCheckRetryRulesTypeNoneSchema: EnumSchema<TypeOptionsHealthCheckRetryRulesTypeNone> =
  s.enumOf<TypeOptionsHealthCheckRetryRulesTypeNone>(TypeOptionsHealthCheckRetryRulesTypeNone);
