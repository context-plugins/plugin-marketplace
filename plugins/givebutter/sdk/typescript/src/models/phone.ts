import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Phone = {
  value?: string | null;
  type?: string | null;
  isPrimary?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneSchema: Schema<Phone> = s.object<Phone>(
  {
    value: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    isPrimary: s.optional(s.boolean()),
    _keysMap: {
      isPrimary: "is_primary",
    },
  },
  { additionalProperties: s.json() },
);
