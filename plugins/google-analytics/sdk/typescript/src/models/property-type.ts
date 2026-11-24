import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Immutable. The property type for this Property resource. When creating a property, if the type is
 * "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied.
 */
export const PropertyType = {
  PropertyTypeUnspecified: "PROPERTY_TYPE_UNSPECIFIED",
  PropertyTypeOrdinary: "PROPERTY_TYPE_ORDINARY",
  PropertyTypeSubproperty: "PROPERTY_TYPE_SUBPROPERTY",
  PropertyTypeRollup: "PROPERTY_TYPE_ROLLUP",
} as const;
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType] | (string & {});

export const propertyTypeSchema: EnumSchema<PropertyType> = s.enumOf<PropertyType>(PropertyType);
