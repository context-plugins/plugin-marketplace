import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { maskedValueSchema, type MaskedValue } from "./unions/masked-value.js";
import { valueSchema, type Value } from "./unions/value.js";

export type MemberSecretItem = {
  id: string;
  name: string;
  value?: Value;
  maskedValue?: MaskedValue;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memberSecretItemSchema: Schema<MemberSecretItem> = s.object<MemberSecretItem>(
  {
    id: s.string(),
    name: s.string(),
    value: s.optional(s.lazy(() => valueSchema)),
    maskedValue: s.optional(s.lazy(() => maskedValueSchema)),
    _keysMap: {
      maskedValue: "masked_value",
    },
  },
  { additionalProperties: s.json() },
);
