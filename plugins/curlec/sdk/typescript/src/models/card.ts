import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputTypeSchema, type InputType } from "./input-type.js";

export type Card = {
  last4?: string;
  network?: string;
  type?: string;
  issuer?: string;
  inputType?: InputType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardSchema: Schema<Card> = s.object<Card>(
  {
    last4: s.optional(s.string()),
    network: s.optional(s.string()),
    type: s.optional(s.string()),
    issuer: s.optional(s.string()),
    inputType: s.optional(s.lazy(() => inputTypeSchema)),
    _keysMap: {
      inputType: "input_type",
    },
  },
  { additionalProperties: s.json() },
);
