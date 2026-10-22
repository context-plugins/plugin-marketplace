import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A reference to an identity provider (IdP) group in the Glean directory. */
export type PlatformIdpGroupReference = {
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
};

export const platformIdpGroupReferenceSchema: Schema<PlatformIdpGroupReference> =
  s.object<PlatformIdpGroupReference>({
    idpGroupId: s.string(),
    displayName: s.string(),
    _keysMap: {
      idpGroupId: "idp_group_id",
      displayName: "display_name",
    },
  });
