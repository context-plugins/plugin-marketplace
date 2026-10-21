import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response body for resetting a usage limit. */
export type PlatformResetUsageLimitsResponse = {
  /** Whether the matching usage limit configuration was removed. */
  isConfigurationRemoved: boolean;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformResetUsageLimitsResponseSchema: Schema<PlatformResetUsageLimitsResponse> =
  s.object<PlatformResetUsageLimitsResponse>({
    isConfigurationRemoved: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      isConfigurationRemoved: "is_configuration_removed",
      requestId: "request_id",
    },
  });
