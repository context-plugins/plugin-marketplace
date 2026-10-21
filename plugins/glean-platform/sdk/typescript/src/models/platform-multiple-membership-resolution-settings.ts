import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformPerMemberSettingsSchema,
  type PlatformPerMemberSettings,
} from "./platform-per-member-settings.js";

/** Settings for resolving limits across multiple memberships. */
export type PlatformMultipleMembershipResolutionSettings = {
  /** Resolution settings for the per-member limit family. */
  perMember: PlatformPerMemberSettings;
};

export const platformMultipleMembershipResolutionSettingsSchema: Schema<PlatformMultipleMembershipResolutionSettings> =
  s.object<PlatformMultipleMembershipResolutionSettings>({
    perMember: platformPerMemberSettingsSchema,
    _keysMap: {
      perMember: "per_member",
    },
  });
