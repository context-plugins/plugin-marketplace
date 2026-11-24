import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  anzsicConnectTransactionsApiSchema,
  type AnzsicConnectTransactionsApi,
} from "./anzsic-connect-transactions-api.js";
import {
  matchTypeConnectTransactionsApiSchema,
  type MatchTypeConnectTransactionsApi,
} from "./match-type-connect-transactions-api.js";
import { mccSchema, type Mcc } from "./mcc.js";

export type CategoryConnectTransactionsApi = {
  /**
   * Indicates the method used to match a payment transaction with a merchant or business
   * classification code. Description for each enum; merchantFull: Indicates an exact match between
   * the transaction and a known merchant in the database. merchantPartial: Suggests a partial match
   * with a merchant, usually based on substring or fuzzy logic. mcc: Match is done using the
   * Merchant Category Code associated with the transaction. ml: Match is determined through machine
   * learning algorithms for classification. none: Match is not found.
   */
  matchType?: MatchTypeConnectTransactionsApi;
  /**
   * The confidence score for the matchType which is a float value between 0 and 1. The higher the
   * number, the higher the confidence in the match.
   */
  matchScore?: string;
  /** Merchant category codes returned from Data holders. */
  mcc?: Mcc;
  anzsic?: AnzsicConnectTransactionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryConnectTransactionsApiSchema: Schema<CategoryConnectTransactionsApi> =
  s.object<CategoryConnectTransactionsApi>(
    {
      matchType: s.optional(s.lazy(() => matchTypeConnectTransactionsApiSchema)),
      matchScore: s.optional(s.string()),
      mcc: s.optional(s.lazy(() => mccSchema)),
      anzsic: s.optional(s.lazy(() => anzsicConnectTransactionsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
