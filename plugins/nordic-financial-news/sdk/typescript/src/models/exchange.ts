import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Primary exchange where the company is listed */
export type Exchange = {
  /** Exchange identifier */
  id?: string;
  /** Exchange display name */
  name?: string;
  /** ISO 10383 Market Identifier Code */
  micCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeSchema: Schema<Exchange> = s.object<Exchange>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    micCode: s.optional(s.string()),
    _keysMap: {
      micCode: "mic_code",
    },
  },
  { additionalProperties: s.json() },
);
