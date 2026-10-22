import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idpGroupsSchema, type IdpGroups } from "./idp-groups.js";

/** Resolution settings for the per-member limit family. */
export type PlatformPerMemberSettings = {
  /** How to resolve effective usage limits when a user belongs to multiple IdP groups. */
  idpGroups: IdpGroups;
};

export const platformPerMemberSettingsSchema: Schema<PlatformPerMemberSettings> =
  s.object<PlatformPerMemberSettings>({
    idpGroups: idpGroupsSchema,
    _keysMap: {
      idpGroups: "idp_groups",
    },
  });
