import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authFieldSchema, type AuthField } from "./auth-field.js";
import { documentationLinkSchema, type DocumentationLink } from "./documentation-link.js";
import { oauthScopesSchema, type OauthScopes } from "./oauth-scopes.js";

/**
 * A connector type that signs in with an OAuth app, with what an admin needs to register that app
 */
export type OAuthRegistryEntry = {
  name: string;
  /** The `connectorType` to use in the OAuth app and connector routes */
  type: string;
  appGroup: string;
  /** Always OAUTH */
  authType: string;
  appDescription: string;
  appCategories: string[];
  iconPath: string;
  /** Provider scopes requested for each way the connector is used */
  oauthScopes: OauthScopes;
  /** Path the provider redirects back to; PipesHub's public origin is prefixed to it */
  redirectUri: string;
  authorizeUrl: string;
  tokenUrl: string;
  /** Extra query parameters sent on the authorize URL; present for some types only */
  additionalParams?: Record<string, string>;
  /** Dropbox and Salesforce only */
  tokenAccessType?: string;
  /** The fields an admin fills in when registering the OAuth app */
  authFields: AuthField[];
  documentationLinks: DocumentationLink[];
};

export const oAuthRegistryEntrySchema: Schema<OAuthRegistryEntry> = s.object<OAuthRegistryEntry>({
  name: s.string(),
  type: s.string(),
  appGroup: s.string(),
  authType: s.string(),
  appDescription: s.string(),
  appCategories: s.array(s.string()),
  iconPath: s.string(),
  oauthScopes: oauthScopesSchema,
  redirectUri: s.string(),
  authorizeUrl: s.string(),
  tokenUrl: s.string(),
  additionalParams: s.optional(s.record(s.string(), s.string())),
  tokenAccessType: s.optional(s.string()),
  authFields: s.array(s.lazy(() => authFieldSchema)),
  documentationLinks: s.array(s.lazy(() => documentationLinkSchema)),
});
