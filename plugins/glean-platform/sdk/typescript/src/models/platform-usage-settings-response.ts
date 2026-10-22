import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformUsageSettingsResource1Schema,
  type PlatformUsageSettingsResource1,
} from "./platform-usage-settings-resource1.js";

/** Response envelope for usage settings operations. */
export type PlatformUsageSettingsResponse = {
  /** Current workspace-wide usage settings. */
  usageSettings: PlatformUsageSettingsResource1;
  /** Opaque request identifier. */
  requestId: string;
};

export const platformUsageSettingsResponseSchema: Schema<PlatformUsageSettingsResponse> =
  s.object<PlatformUsageSettingsResponse>({
    usageSettings: platformUsageSettingsResource1Schema,
    requestId: s.string(),
    _keysMap: {
      usageSettings: "usage_settings",
      requestId: "request_id",
    },
  });
