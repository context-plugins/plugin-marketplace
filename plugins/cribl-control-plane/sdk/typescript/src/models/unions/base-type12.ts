import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  healthCheckRetryRulesTypeBackoffSchema,
  type HealthCheckRetryRulesTypeBackoff,
} from "../health-check-retry-rules-type-backoff.js";
import {
  healthCheckRetryRulesTypeNoneSchema,
  type HealthCheckRetryRulesTypeNone,
} from "../health-check-retry-rules-type-none.js";
import {
  healthCheckRetryRulesTypeStaticSchema,
  type HealthCheckRetryRulesTypeStatic,
} from "../health-check-retry-rules-type-static.js";

export type BaseType12 =
  | (HealthCheckRetryRulesTypeNone & { type: "none" })
  | (HealthCheckRetryRulesTypeStatic & { type: "static" })
  | (HealthCheckRetryRulesTypeBackoff & { type: "backoff" });

export const baseType12Schema: Schema<BaseType12> = s.discriminatedUnion<BaseType12>("type", {
  none: healthCheckRetryRulesTypeNoneSchema,
  static: healthCheckRetryRulesTypeStaticSchema,
  backoff: healthCheckRetryRulesTypeBackoffSchema,
});
