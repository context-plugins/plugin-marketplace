import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomAttribute = {
  /**
   * Specifies the object identifier (OID) of the attribute type of the relative distinguished name
   * (RDN).
   */
  objectIdentifier?: string;
  /** Specifies the attribute value of relative distinguished name (RDN). */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customAttributeSchema: Schema<CustomAttribute> = s.object<CustomAttribute>(
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
