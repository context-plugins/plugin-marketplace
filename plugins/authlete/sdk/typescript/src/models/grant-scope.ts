import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GrantScope = {
  /** Space-delimited scopes. */
  scope?: string;
  /** List of resource indicators. */
  resource?: string[];
};

export const grantScopeSchema: Schema<GrantScope> = s.object<GrantScope>({
  scope: s.optional(s.string()),
  resource: s.optional(s.array(s.string())),
});
