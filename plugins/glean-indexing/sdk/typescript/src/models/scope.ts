import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Scope = {
  AppCard: "APP_CARD",
  AutocompleteExactMatch: "AUTOCOMPLETE_EXACT_MATCH",
  AutocompleteFuzzyMatch: "AUTOCOMPLETE_FUZZY_MATCH",
  AutocompleteZeroQuery: "AUTOCOMPLETE_ZERO_QUERY",
  NewTabPage: "NEW_TAB_PAGE",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
