import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card = {
  /** This field is set as `true` if you can pay by card */
  payByCard?: boolean;
  /** This field is set as `true` if you can add a card account as a payment method */
  fundingEnabled?: boolean;
  /** This field is set as `true` if you can pay with an AMEX credit card */
  amexAllowed?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardSchema: Schema<Card> = s.object<Card>(
  {
    payByCard: s.optional(s.boolean()),
    fundingEnabled: s.optional(s.boolean()),
    amexAllowed: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
