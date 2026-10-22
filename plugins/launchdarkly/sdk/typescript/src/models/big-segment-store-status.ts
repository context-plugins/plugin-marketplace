import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storeIntegrationErrorSchema, type StoreIntegrationError } from "./store-integration-error.js";

export type BigSegmentStoreStatus = {
  /**
   * Whether the persistent store integration is fully synchronized with the LaunchDarkly
   * environment, and the <code>lastSync</code> occurred within a few minutes
   */
  available?: boolean;
  /**
   * Whether the persistent store integration may not be fully synchronized with the LaunchDarkly
   * environment. <code>true</code> if the integration could be stale.
   */
  potentiallyStale?: boolean;
  lastSync?: number;
  lastError?: number;
  errors?: StoreIntegrationError[];
};

export const bigSegmentStoreStatusSchema: Schema<BigSegmentStoreStatus> = s.object<BigSegmentStoreStatus>({
  available: s.optional(s.boolean()),
  potentiallyStale: s.optional(s.boolean()),
  lastSync: s.optional(s.int()),
  lastError: s.optional(s.int()),
  errors: s.optional(s.array(s.lazy(() => storeIntegrationErrorSchema))),
});
