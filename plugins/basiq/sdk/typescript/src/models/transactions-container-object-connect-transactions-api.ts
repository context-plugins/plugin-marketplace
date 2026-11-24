import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datumConnectTransactionsApiSchema,
  type DatumConnectTransactionsApi,
} from "./datum-connect-transactions-api.js";
import {
  links1ConnectTransactionsApiSchema,
  type Links1ConnectTransactionsApi,
} from "./links1-connect-transactions-api.js";

/**
 * A transaction object is created whenever money is debited or credited from a particular account.
 */
export type TransactionsContainerObjectConnectTransactionsApi = {
  /** Value is "list". */
  type: string;
  /** Count of the transactions in the response. */
  count: number;
  size: number;
  data: DatumConnectTransactionsApi[];
  links?: Links1ConnectTransactionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionsContainerObjectConnectTransactionsApiSchema: Schema<TransactionsContainerObjectConnectTransactionsApi> =
  s.object<TransactionsContainerObjectConnectTransactionsApi>(
    {
      type: s.string(),
      count: s.int(),
      size: s.int(),
      data: s.array(s.lazy(() => datumConnectTransactionsApiSchema)),
      links: s.optional(s.lazy(() => links1ConnectTransactionsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
