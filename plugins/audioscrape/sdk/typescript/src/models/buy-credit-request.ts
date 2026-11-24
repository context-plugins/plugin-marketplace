import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuyCreditRequest = {
  /** Balance to buy in US cents, 500–10,000 (default 500). */
  amountCents?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buyCreditRequestSchema: Schema<BuyCreditRequest> = s.object<BuyCreditRequest>(
  {
    amountCents: s.optionalNullable(s.int()),
    _keysMap: {
      amountCents: "amount_cents",
    },
  },
  { additionalProperties: s.json() },
);
