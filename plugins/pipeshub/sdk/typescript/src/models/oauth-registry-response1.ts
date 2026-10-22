import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthRegistryEntrySchema, type OAuthRegistryEntry } from "./oauth-registry-entry.js";

export type OauthRegistryResponse1 = {
  success: boolean;
  /**
   * A connector type that signs in with an OAuth app, with what an admin needs to register that app
   */
  connector: OAuthRegistryEntry;
};

export const oauthRegistryResponse1Schema: Schema<OauthRegistryResponse1> = s.object<OauthRegistryResponse1>({
  success: s.boolean(),
  connector: oAuthRegistryEntrySchema,
});
