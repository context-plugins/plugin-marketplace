import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card = {
  specId?: string;
  subject?: string;
  cardNumber?: string | null;
  setName?: string | null;
  year?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardSchema: Schema<Card> = s.object<Card>(
  {
    specId: s.optional(s.string()),
    subject: s.optional(s.string()),
    cardNumber: s.optionalNullable(s.string()),
    setName: s.optionalNullable(s.string()),
    year: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
