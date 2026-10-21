import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * OAuth scopes available to the signed-in user for app registration, grouped by category label.
 * Category keys are UI labels (e.g. `Identity`, `Knowledge Base`); each maps to a list of scopes in
 * that group. Categories defined in server config may appear with an **empty array** when every
 * scope in that category is restricted for the caller's role (e.g. non–org-admin users never
 * receive admin-only scopes).
 */
export type OAuthScopesGroupedResponse = {
  /** Map of category display name to scopes in that category */
  scopes: Record<string, Record<string, unknown>>;
};

export const oAuthScopesGroupedResponseSchema: Schema<OAuthScopesGroupedResponse> =
  s.object<OAuthScopesGroupedResponse>({
    scopes: s.record(s.string(), s.record(s.string(), s.unknown())),
  });
