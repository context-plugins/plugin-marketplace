import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorAuthTypeSchema, type ConnectorAuthType } from "./connector-auth-type.js";
import { connectorScopeSchema, type ConnectorScope } from "./connector-scope.js";
import { connectorStoredConfigSchema, type ConnectorStoredConfig } from "./connector-stored-config.js";

export type ConnectorConfig = {
  connectorId?: string;
  name?: string;
  type?: string;
  appGroup?: string;
  /**
   * How a connector instance signs in to its source. Each connector type supports a subset; see
   * `supportedAuthTypes` in the registry.
   */
  authType?: ConnectorAuthType;
  /**
   * Scope determines visibility and access control for connectors:<br> <ul> <li><code>team</code> -
   * Available to all users in the organization (admin-only creation)</li> <li><code>personal</code>
   * - Private to the creating user only</li> </ul>
   */
  scope?: ConnectorScope;
  createdBy?: string;
  updatedBy?: string;
  appDescription?: string;
  appCategories?: string[];
  supportsRealtime?: boolean;
  supportsSync?: boolean;
  supportsAgent?: boolean;
  iconPath?: string;
  /**
   * A connector instance's saved settings. Secret auth fields come back masked; saving the mask
   * back keeps the stored value. Provider OAuth tokens are never returned.
   */
  config?: ConnectorStoredConfig;
  isActive?: boolean;
  isConfigured?: boolean;
  isAuthenticated?: boolean;
  createdAtTimestamp?: number;
  updatedAtTimestamp?: number;
};

export const connectorConfigSchema: Schema<ConnectorConfig> = s.object<ConnectorConfig>({
  connectorId: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  appGroup: s.optional(s.string()),
  authType: s.optional(s.lazy(() => connectorAuthTypeSchema)),
  scope: s.optional(s.lazy(() => connectorScopeSchema)),
  createdBy: s.optional(s.string()),
  updatedBy: s.optional(s.string()),
  appDescription: s.optional(s.string()),
  appCategories: s.optional(s.array(s.string())),
  supportsRealtime: s.optional(s.boolean()),
  supportsSync: s.optional(s.boolean()),
  supportsAgent: s.optional(s.boolean()),
  iconPath: s.optional(s.string()),
  config: s.optional(s.lazy(() => connectorStoredConfigSchema)),
  isActive: s.optional(s.boolean()),
  isConfigured: s.optional(s.boolean()),
  isAuthenticated: s.optional(s.boolean()),
  createdAtTimestamp: s.optional(s.int()),
  updatedAtTimestamp: s.optional(s.int()),
  _keysMap: {
    connectorId: "connector_id",
  },
});
