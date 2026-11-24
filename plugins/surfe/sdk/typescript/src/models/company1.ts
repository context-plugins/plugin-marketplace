import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Company1 = {
  domain?: string;
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const company1Schema: Schema<Company1> = s.object<Company1>(
  {
    domain: s.optional(s.string()),
    externalId: s.optional(s.string()),
    _keysMap: {
      externalId: "externalID",
    },
  },
  { additionalProperties: s.json() },
);
