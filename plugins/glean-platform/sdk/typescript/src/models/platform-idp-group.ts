import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An IdP group in the Glean directory. */
export type PlatformIdpGroup = {
  /**
   * Opaque IdP group ID. The same group always gets the same ID. Callers must not parse or build
   * it.
   */
  idpGroupId: string;
  /**
   * Group name from the identity provider. When the provider has no display name, this is the
   * group's name or ID in the provider.
   */
  displayName: string;
  /**
   * The identity provider datasource that the group comes from, for example "okta", "gdrive", or
   * "o365".
   */
  provider: string;
  /**
   * The datasource instance that the group comes from, for example "okta". A provider can have more
   * than one instance.
   */
  providerInstance: string;
  /**
   * Whether Glean loaded the group from the directory. A group that only a usage limit names is
   * inactive.
   */
  isActive: boolean;
};

export const platformIdpGroupSchema: Schema<PlatformIdpGroup> = s.object<PlatformIdpGroup>({
  idpGroupId: s.string(),
  displayName: s.string(),
  provider: s.string(),
  providerInstance: s.string(),
  isActive: s.boolean(),
  _keysMap: {
    idpGroupId: "idp_group_id",
    displayName: "display_name",
    providerInstance: "provider_instance",
    isActive: "is_active",
  },
});
