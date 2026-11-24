import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type V3PhoneNumber = {
  number?: string;
  type?: Type1;
  doNotCall?: boolean;
  updateDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3PhoneNumberSchema: Schema<V3PhoneNumber> = s.object<V3PhoneNumber>(
  {
    number: s.optional(s.string()),
    type: s.optional(s.lazy(() => type1Schema)),
    doNotCall: s.optional(s.boolean()),
    updateDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
