import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** How views show a property. Attributes the backend doesn't know are kept. */
export type PropertyAttributes = {
  /** Whether the property is hidden. */
  isHidden?: boolean | null;
  /** Width of the property's column, in CSS pixels. */
  width?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const propertyAttributesProperties: s.Shape<PropertyAttributes> = {
  isHidden: s.optionalNullable(s.boolean()),
  width: s.optionalNullable(s.int()),
  _keysMap: {
    isHidden: "is_hidden",
  },
};

export const propertyAttributesInternalSchema: Schema<PropertyAttributes> = s.object<PropertyAttributes>(
  propertyAttributesProperties,
  { additionalProperties: s.json() },
);

export const propertyAttributesSchema: Schema<PropertyAttributes> = s.lazySchema(() =>
  s.object<PropertyAttributes>(
    {
      ...propertyAttributesProperties,
      width: s.optionalNullable(s.int().check(s.gte(1), s.lte(4096))),
    },
    { additionalProperties: s.json() },
  ),
);
