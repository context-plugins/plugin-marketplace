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

/** Current workspace-wide usage settings. */
export type PlatformUsageSettingsResource1 = {
  /** Settings for resolving limits across multiple memberships. */
  multipleMembershipResolution?: PlatformMultipleMembershipResolutionSettings;
  /** Settings that govern usage limit increase requests. */
  limitIncreaseRequests?: PlatformLimitIncreaseRequestSettings;
  /** ISO 8601 timestamp of the last settings update. */
  updatedAt?: Date;
};

export const platformUsageSettingsResource1Schema: Schema<PlatformUsageSettingsResource1> =
  s.object<PlatformUsageSettingsResource1>({
    multipleMembershipResolution: s.optional(
      s.lazy(() => platformMultipleMembershipResolutionSettingsSchema),
    ),
    limitIncreaseRequests: s.optional(s.lazy(() => platformLimitIncreaseRequestSettingsSchema)),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      multipleMembershipResolution: "multiple_membership_resolution",
      limitIncreaseRequests: "limit_increase_requests",
      updatedAt: "updated_at",
    },
  });
