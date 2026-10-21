import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformLimitIncreaseRequestSettingsSchema,
  type PlatformLimitIncreaseRequestSettings,
} from "./platform-limit-increase-request-settings.js";
import {
  platformMultipleMembershipResolutionSettingsSchema,
  type PlatformMultipleMembershipResolutionSettings,
} from "./platform-multiple-membership-resolution-settings.js";

export type PlatformUsageSettingsUpdateRequest1 = {
  /** Settings for resolving limits across multiple memberships. */
  multipleMembershipResolution?: PlatformMultipleMembershipResolutionSettings;
  /** Settings that govern usage limit increase requests. */
  limitIncreaseRequests: PlatformLimitIncreaseRequestSettings;
};

export const platformUsageSettingsUpdateRequest1Schema: Schema<PlatformUsageSettingsUpdateRequest1> =
  s.object<PlatformUsageSettingsUpdateRequest1>({
    multipleMembershipResolution: s.optional(
      s.lazy(() => platformMultipleMembershipResolutionSettingsSchema),
    ),
    limitIncreaseRequests: platformLimitIncreaseRequestSettingsSchema,
    _keysMap: {
      multipleMembershipResolution: "multiple_membership_resolution",
      limitIncreaseRequests: "limit_increase_requests",
    },
  });
