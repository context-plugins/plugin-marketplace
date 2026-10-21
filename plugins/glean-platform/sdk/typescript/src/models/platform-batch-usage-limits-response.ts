import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformUsageLimitSchema, type PlatformUsageLimit } from "./platform-usage-limit.js";

/** Response body for successfully applied usage limit policies. */
export type PlatformBatchUsageLimitsResponse = {
  /** Applied usage limit policies, in the same order as the request. */
  results: PlatformUsageLimit[];
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformBatchUsageLimitsResponseSchema: Schema<PlatformBatchUsageLimitsResponse> =
  s.object<PlatformBatchUsageLimitsResponse>({
    results: s.array(s.lazy(() => platformUsageLimitSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
