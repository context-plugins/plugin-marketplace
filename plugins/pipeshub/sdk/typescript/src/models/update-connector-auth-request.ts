import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorAuthConfigSchema, type ConnectorAuthConfig } from "./connector-auth-config.js";

export type UpdateConnectorAuthRequest = {
  /**
   * Auth settings, flat: send each field listed under `auth.schemas.<authType>.fields` in GET
   * /connectors/registry/{connectorType}/schema by its `name`. For OAuth, an admin may send the
   * OAuth app's credentials here (the app is saved and linked), or anyone may send `oauthConfigId`
   * to use a saved app.
   */
  auth: ConnectorAuthConfig;
  /** Recomputes the OAuth redirect URI */
  baseUrl?: string;
};

export const updateConnectorAuthRequestSchema: Schema<UpdateConnectorAuthRequest> =
  s.object<UpdateConnectorAuthRequest>({
    auth: connectorAuthConfigSchema,
    baseUrl: s.optional(s.string()),
  });
