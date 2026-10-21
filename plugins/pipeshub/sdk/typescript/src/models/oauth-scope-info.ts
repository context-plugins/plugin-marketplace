import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about an OAuth scope */
export type OAuthScopeInfo = {
  /** Scope identifier */
  name: string;
  /** Human-readable scope description */
  description: string;
  /** Scope category for grouping (matches the key under `scopes` on list responses) */
  category: string;
  /** Whether end-user consent is required when this scope is requested */
  requiresUserConsent: boolean;
};

export const oAuthScopeInfoSchema: Schema<OAuthScopeInfo> = s.object<OAuthScopeInfo>({
  name: s.string(),
  description: s.string(),
  category: s.string(),
  requiresUserConsent: s.boolean(),
});
