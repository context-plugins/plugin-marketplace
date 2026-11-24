import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Phone = {
  number: string;
  isPremium: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneSchema: Schema<Phone> = s.object<Phone>(
  {
    number: s.string(),
    isPremium: s.boolean(),
    _keysMap: {
      isPremium: "is_premium",
    },
  },
  { additionalProperties: s.json() },
);
