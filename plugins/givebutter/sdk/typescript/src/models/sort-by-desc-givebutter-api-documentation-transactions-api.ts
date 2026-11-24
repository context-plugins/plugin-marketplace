import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDescGivebutterApiDocumentationTransactionsApi = {
  Amount: "amount",
  TransactedAt: "transacted_at",
  CreatedAt: "created_at",
  ContactName: "contact_name",
} as const;
export type SortByDescGivebutterApiDocumentationTransactionsApi =
  | (typeof SortByDescGivebutterApiDocumentationTransactionsApi)[keyof typeof SortByDescGivebutterApiDocumentationTransactionsApi]
  | (string & {});

export const sortByDescGivebutterApiDocumentationTransactionsApiSchema: EnumSchema<SortByDescGivebutterApiDocumentationTransactionsApi> =
  s.enumOf<SortByDescGivebutterApiDocumentationTransactionsApi>(
    SortByDescGivebutterApiDocumentationTransactionsApi,
  );
