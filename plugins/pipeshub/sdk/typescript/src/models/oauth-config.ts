import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { config1Schema, type Config1 } from "./config1.js";

/**
 * A saved OAuth app for a connector type. Admins also get `config` (secrets masked when
 * HIDE_SECRET_CONFIG is on) and, in lists, the provider endpoints.
 */
export type OAuthConfig = {
  /** OAuth app ID: the `oauthConfigId` to link a connector to */
  id?: string;
  oauthInstanceName?: string;
  connectorType?: string;
  iconPath?: string;
  appGroup?: string;
  appDescription?: string;
  appCategories?: string[];
  /** OAuth app credentials; keys follow the connector type's OAuth fields */
  config?: Config1;
  userId?: string;
  orgId?: string;
  createdBy?: string;
  updatedBy?: string;
  /** Epoch milliseconds */
  createdAtTimestamp?: number;
  /** Epoch milliseconds */
  updatedAtTimestamp?: number;
  authorizeUrl?: string;
  tokenUrl?: string;
  redirectUri?: string;
  /** Provider scopes requested per use */
  scopes?: Record<string, Record<string, unknown>>;
};

export const oAuthConfigSchema: Schema<OAuthConfig> = s.object<OAuthConfig>({
  id: s.optional(s.string()),
  oauthInstanceName: s.optional(s.string()),
  connectorType: s.optional(s.string()),
  iconPath: s.optional(s.string()),
  appGroup: s.optional(s.string()),
  appDescription: s.optional(s.string()),
  appCategories: s.optional(s.array(s.string())),
  config: s.optional(s.lazy(() => config1Schema)),
  userId: s.optional(s.string()),
  orgId: s.optional(s.string()),
  createdBy: s.optional(s.string()),
  updatedBy: s.optional(s.string()),
  createdAtTimestamp: s.optional(s.int()),
  updatedAtTimestamp: s.optional(s.int()),
  authorizeUrl: s.optional(s.string()),
  tokenUrl: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
  scopes: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  _keysMap: {
    id: "_id",
  },
});
