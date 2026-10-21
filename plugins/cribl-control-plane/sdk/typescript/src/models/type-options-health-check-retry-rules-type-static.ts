import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsHealthCheckRetryRulesTypeStatic = {
  Static: "static",
} as const;
export type TypeOptionsHealthCheckRetryRulesTypeStatic =
  | (typeof TypeOptionsHealthCheckRetryRulesTypeStatic)[keyof typeof TypeOptionsHealthCheckRetryRulesTypeStatic]
  | (string & {});

export const typeOptionsHealthCheckRetryRulesTypeStaticSchema: EnumSchema<TypeOptionsHealthCheckRetryRulesTypeStatic> =
  s.enumOf<TypeOptionsHealthCheckRetryRulesTypeStatic>(TypeOptionsHealthCheckRetryRulesTypeStatic);
