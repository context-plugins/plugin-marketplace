import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScopeStatableStatsSitesApi = {
  Visitor: "visitor",
  Session: "session",
} as const;
export type ScopeStatableStatsSitesApi =
  | (typeof ScopeStatableStatsSitesApi)[keyof typeof ScopeStatableStatsSitesApi]
  | (string & {});

export const scopeStatableStatsSitesApiSchema: EnumSchema<ScopeStatableStatsSitesApi> =
  s.enumOf<ScopeStatableStatsSitesApi>(ScopeStatableStatsSitesApi);
