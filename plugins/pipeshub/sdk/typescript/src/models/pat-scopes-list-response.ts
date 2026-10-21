import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthScopeInfoSchema, type OAuthScopeInfo } from "./oauth-scope-info.js";

/**
 * Response body for `GET /personal-access-tokens/scopes` (`listScopes`). Unlike `GET
 * /oauth-clients/scopes`, this is a **flat array**, not grouped by category, and reflects the org's
 * configured `MCP_SCOPES` rather than the full role-aware OAuth-app scope catalog.
 */
export type PatScopesListResponse = {
  scopes: OAuthScopeInfo[];
};

export const patScopesListResponseSchema: Schema<PatScopesListResponse> = s.object<PatScopesListResponse>({
  scopes: s.array(s.lazy(() => oAuthScopeInfoSchema)),
});
