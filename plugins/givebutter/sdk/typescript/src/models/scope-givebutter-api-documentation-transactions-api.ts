import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScopeGivebutterApiDocumentationTransactionsApi = {
  All: "all",
  Benefiting: "benefiting",
  Chapters: "chapters",
} as const;
export type ScopeGivebutterApiDocumentationTransactionsApi =
  | (typeof ScopeGivebutterApiDocumentationTransactionsApi)[keyof typeof ScopeGivebutterApiDocumentationTransactionsApi]
  | (string & {});

export const scopeGivebutterApiDocumentationTransactionsApiSchema: EnumSchema<ScopeGivebutterApiDocumentationTransactionsApi> =
  s.enumOf<ScopeGivebutterApiDocumentationTransactionsApi>(ScopeGivebutterApiDocumentationTransactionsApi);
