import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorAuthConfigSchema, type ConnectorAuthConfig } from "./connector-auth-config.js";
import { connectorFiltersConfigSchema, type ConnectorFiltersConfig } from "./connector-filters-config.js";
import { connectorSyncConfigSchema, type ConnectorSyncConfig } from "./connector-sync-config.js";

export type Config = {
  /**
   * Auth settings, flat: send each field listed under `auth.schemas.<authType>.fields` in GET
   * /connectors/registry/{connectorType}/schema by its `name`. For OAuth, an admin may send the
   * OAuth app's credentials here (the app is saved and linked), or anyone may send `oauthConfigId`
   * to use a saved app.
   */
  auth?: ConnectorAuthConfig;
  /**
   * Sync strategy plus connector-specific sync settings, flat: send each field listed under
   * `sync.customFields` in the registry schema by its `name`.
   */
  sync?: ConnectorSyncConfig;
  filters?: ConnectorFiltersConfig;
};

export const configSchema: Schema<Config> = s.object<Config>({
  auth: s.optional(s.lazy(() => connectorAuthConfigSchema)),
  sync: s.optional(s.lazy(() => connectorSyncConfigSchema)),
  filters: s.optional(s.lazy(() => connectorFiltersConfigSchema)),
});
