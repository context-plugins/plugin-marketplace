import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { grantTransactionSchema, type GrantTransaction } from "./grant-transaction.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

export type TransactionsResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  /** Total matching rows, not the number returned. */
  hits: number;
  page: number;
  limit: number;
  /** Rows in THIS response. */
  resultsCount: number;
  totalPages: number;
  results: GrantTransaction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionsResponseSchema: Schema<TransactionsResponse> = s.object<TransactionsResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    hits: s.int(),
    page: s.int(),
    limit: s.int(),
    resultsCount: s.int(),
    totalPages: s.int(),
    results: s.array(s.lazy(() => grantTransactionSchema)),
    _keysMap: {
      xPlinth: "x_plinth",
      resultsCount: "results_count",
      totalPages: "total_pages",
    },
  },
  { additionalProperties: s.json() },
);
