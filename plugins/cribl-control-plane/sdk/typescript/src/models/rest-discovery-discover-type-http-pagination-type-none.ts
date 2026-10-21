import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsHealthCheckRetryRulesTypeNoneSchema,
  type TypeOptionsHealthCheckRetryRulesTypeNone,
} from "./type-options-health-check-retry-rules-type-none.js";

export type RestDiscoveryDiscoverTypeHttpPaginationTypeNone = {
  /** Resource type identifier. */
  type?: TypeOptionsHealthCheckRetryRulesTypeNone;
};

export const restDiscoveryDiscoverTypeHttpPaginationTypeNoneSchema: Schema<RestDiscoveryDiscoverTypeHttpPaginationTypeNone> =
  s.object<RestDiscoveryDiscoverTypeHttpPaginationTypeNone>({
    type: s.optional(s.lazy(() => typeOptionsHealthCheckRetryRulesTypeNoneSchema)),
  });
