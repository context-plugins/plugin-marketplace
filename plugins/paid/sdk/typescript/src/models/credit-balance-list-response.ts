import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditBalanceSchema, type CreditBalance } from "./credit-balance.js";

export type CreditBalanceListResponse = {
  data: CreditBalance[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditBalanceListResponseSchema: Schema<CreditBalanceListResponse> =
  s.object<CreditBalanceListResponse>(
    {
      data: s.array(s.lazy(() => creditBalanceSchema)),
    },
    { additionalProperties: s.json() },
  );
