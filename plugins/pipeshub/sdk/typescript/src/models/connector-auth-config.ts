import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Auth settings, flat: send each field listed under `auth.schemas.<authType>.fields` in GET
 * /connectors/registry/{connectorType}/schema by its `name`. For OAuth, an admin may send the OAuth
 * app's credentials here (the app is saved and linked), or anyone may send `oauthConfigId` to use a
 * saved app.
 */
export type ConnectorAuthConfig = {
  /** A saved OAuth app (GET /oauth/{connectorType}) */
  oauthConfigId?: string;
  /** Name for the OAuth app saved from inline credentials */
  oauthInstanceName?: string;
};

export const connectorAuthConfigSchema: Schema<ConnectorAuthConfig> = s.object<ConnectorAuthConfig>({
  oauthConfigId: s.optional(s.string()),
  oauthInstanceName: s.optional(s.string()),
});
