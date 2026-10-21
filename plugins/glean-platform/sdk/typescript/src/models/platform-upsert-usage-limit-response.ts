import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformUsageLimit1Schema, type PlatformUsageLimit1 } from "./platform-usage-limit1.js";

/** Response envelope for an upserted usage limit. */
export type PlatformUpsertUsageLimitResponse = {
  /** The normalized usage limit. */
  usageLimit: PlatformUsageLimit1;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformUpsertUsageLimitResponseSchema: Schema<PlatformUpsertUsageLimitResponse> =
  s.object<PlatformUpsertUsageLimitResponse>({
    usageLimit: platformUsageLimit1Schema,
    requestId: s.string(),
    _keysMap: {
      usageLimit: "usage_limit",
      requestId: "request_id",
    },
  });
