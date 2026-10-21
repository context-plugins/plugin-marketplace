import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsHealthCheckRetryRulesTypeNoneSchema,
  type TypeOptionsHealthCheckRetryRulesTypeNone,
} from "./type-options-health-check-retry-rules-type-none.js";

export type HealthCheckRetryRulesTypeNone = {
  /** Resource type identifier. */
  type?: TypeOptionsHealthCheckRetryRulesTypeNone;
};

export const healthCheckRetryRulesTypeNoneSchema: Schema<HealthCheckRetryRulesTypeNone> =
  s.object<HealthCheckRetryRulesTypeNone>({
    type: s.optional(s.lazy(() => typeOptionsHealthCheckRetryRulesTypeNoneSchema)),
  });
