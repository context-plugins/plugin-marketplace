import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputTypeSchema, type InputType } from "./input-type.js";

/** Requires PCI DSS compliance */
export type Card1 = {
  name?: string;
  number?: string;
  expiryMonth?: string;
  expiryYear?: string;
  inputType?: InputType;
  tokenId?: string;
  token?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const card1Schema: Schema<Card1> = s.object<Card1>(
  {
    name: s.optional(s.string()),
    number: s.optional(s.string()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    inputType: s.optional(s.lazy(() => inputTypeSchema)),
    tokenId: s.optional(s.string()),
    token: s.optional(s.string()),
    _keysMap: {
      expiryMonth: "expiry_month",
      expiryYear: "expiry_year",
      inputType: "input_type",
      tokenId: "token_id",
    },
  },
  { additionalProperties: s.json() },
);
