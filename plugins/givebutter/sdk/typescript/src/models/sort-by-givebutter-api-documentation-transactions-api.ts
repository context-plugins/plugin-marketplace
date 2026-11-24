import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByGivebutterApiDocumentationTransactionsApi = {
  Amount: "amount",
  TransactedAt: "transacted_at",
  CreatedAt: "created_at",
  ContactName: "contact_name",
} as const;
export type SortByGivebutterApiDocumentationTransactionsApi =
  | (typeof SortByGivebutterApiDocumentationTransactionsApi)[keyof typeof SortByGivebutterApiDocumentationTransactionsApi]
  | (string & {});

export const sortByGivebutterApiDocumentationTransactionsApiSchema: EnumSchema<SortByGivebutterApiDocumentationTransactionsApi> =
  s.enumOf<SortByGivebutterApiDocumentationTransactionsApi>(SortByGivebutterApiDocumentationTransactionsApi);
