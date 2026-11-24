import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OtherName = {
  /** Specifies an OID. */
  objectIdentifier?: string;
  /** Specifies an OID value. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otherNameSchema: Schema<OtherName> = s.object<OtherName>(
  {
    objectIdentifier: s.optional(s.string()),
    value: s.optional(s.string()),
    _keysMap: {
      objectIdentifier: "ObjectIdentifier",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
