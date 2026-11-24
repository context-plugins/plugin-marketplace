import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CardDetails = {
  /** Card token identifier (card_*). */
  id?: string;
  entity?: string;
  /** Cardholder name. */
  name?: string;
  /** Last 4 digits of the card number. */
  last4?: string;
  /** Card network. Examples: Visa, MasterCard, RuPay, Amex. */
  network?: string;
  /** Card type: credit or debit. */
  type?: string;
  /** 4-character code of the issuing bank. */
  issuer?: string;
  /** Whether EMI is available on this card. */
  emi?: boolean;
  /** Card sub-type (e.g. consumer, corporate). */
  subType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardDetailsSchema: Schema<CardDetails> = s.object<CardDetails>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.string()),
    name: s.optional(s.string()),
    last4: s.optional(s.string()),
    network: s.optional(s.string()),
    type: s.optional(s.string()),
    issuer: s.optional(s.string()),
    emi: s.optional(s.boolean()),
    subType: s.optional(s.string()),
    _keysMap: {
      subType: "sub_type",
    },
  },
  { additionalProperties: s.json() },
);
