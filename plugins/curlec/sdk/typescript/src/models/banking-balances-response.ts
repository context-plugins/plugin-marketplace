import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankingBalanceSchema, type BankingBalance } from "./banking-balance.js";

export type BankingBalancesResponse = {
  entity?: string;
  count?: number;
  items?: BankingBalance[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankingBalancesResponseSchema: Schema<BankingBalancesResponse> =
  s.object<BankingBalancesResponse>(
    {
      entity: s.optional(s.string()),
      count: s.optional(s.int()),
      items: s.optional(s.array(s.lazy(() => bankingBalanceSchema))),
    },
    { additionalProperties: s.json() },
  );
