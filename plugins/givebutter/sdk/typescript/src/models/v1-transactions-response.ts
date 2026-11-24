import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import {
  metaGivebutterApiDocumentationTransactionsApiInternalSchema,
  metaGivebutterApiDocumentationTransactionsApiSchema,
  type MetaGivebutterApiDocumentationTransactionsApi,
} from "./meta-givebutter-api-documentation-transactions-api.js";
import {
  transactionResource2InternalSchema,
  transactionResource2Schema,
  type TransactionResource2,
} from "./unions/transaction-resource2.js";

export type V1TransactionsResponse = {
  data: TransactionResource2[];
  links: Links;
  meta: MetaGivebutterApiDocumentationTransactionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1TransactionsResponseProperties: s.Shape<V1TransactionsResponse> = {
  data: s.array(s.lazy(() => transactionResource2InternalSchema)),
  links: linksSchema,
  meta: metaGivebutterApiDocumentationTransactionsApiInternalSchema,
};

export const v1TransactionsResponseInternalSchema: Schema<V1TransactionsResponse> =
  s.object<V1TransactionsResponse>(v1TransactionsResponseProperties, { additionalProperties: s.json() });

export const v1TransactionsResponseSchema: Schema<V1TransactionsResponse> = s.lazySchema(() =>
  s.object<V1TransactionsResponse>(
    {
      ...v1TransactionsResponseProperties,
      data: s.array(s.lazy(() => transactionResource2Schema)),
      meta: metaGivebutterApiDocumentationTransactionsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
