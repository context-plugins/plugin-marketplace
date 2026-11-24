import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { remainingSchema, type Remaining } from "./unions/remaining.js";

/** `quote=true`: this request's price. Free. */
export type Quote = {
  cost: number;
  /** Tokens left, `unlimited`, or null when unknown. */
  remaining: Remaining | null;
  rateCard: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quoteSchema: Schema<Quote> = s.object<Quote>(
  {
    cost: s.int(),
    remaining: s.nullable(s.lazy(() => remainingSchema)),
    rateCard: s.string(),
    _keysMap: {
      rateCard: "rate_card",
    },
  },
  { additionalProperties: s.json() },
);
