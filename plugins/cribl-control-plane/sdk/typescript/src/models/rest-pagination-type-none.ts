import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsHealthCheckRetryRulesTypeNoneSchema,
  type TypeOptionsHealthCheckRetryRulesTypeNone,
} from "./type-options-health-check-retry-rules-type-none.js";

export type RestPaginationTypeNone = {
  /** Resource type identifier. */
  type?: TypeOptionsHealthCheckRetryRulesTypeNone;
};

export const restPaginationTypeNoneSchema: Schema<RestPaginationTypeNone> = s.object<RestPaginationTypeNone>({
  type: s.optional(s.lazy(() => typeOptionsHealthCheckRetryRulesTypeNoneSchema)),
});
