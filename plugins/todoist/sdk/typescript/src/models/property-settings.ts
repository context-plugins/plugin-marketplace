import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  propertyAttributesInternalSchema,
  propertyAttributesSchema,
  type PropertyAttributes,
} from "./property-attributes.js";

/**
 * How views show task properties, such as the due date or labels, holding only what the user
 * changed. Every layout reads the same settings: `width` applies where a layout shows the property
 * in a column. Property IDs are opaque strings, so clients can add properties, like custom fields,
 * without a backend change, and keep the ones they don't know, as well as keys and attributes the
 * backend doesn't know.
 */
export type PropertySettings = {
  /** Property IDs in display order. */
  order?: string[] | null;
  /** How each property shows, by property ID. */
  properties?: Record<string, PropertyAttributes | null> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const propertySettingsProperties: s.Shape<PropertySettings> = {
  order: s.optionalNullable(s.array(s.string())),
  properties: s.optionalNullable(
    s.record(s.string(), s.nullable(s.lazy(() => propertyAttributesInternalSchema))),
  ),
};

export const propertySettingsInternalSchema: Schema<PropertySettings> = s.object<PropertySettings>(
  propertySettingsProperties,
  { additionalProperties: s.json() },
);

export const propertySettingsSchema: Schema<PropertySettings> = s.lazySchema(() =>
  s.object<PropertySettings>(
    {
      ...propertySettingsProperties,
      order: s.optionalNullable(s.array(s.string()).check(s.maxLength(256))),
      properties: s.optionalNullable(
        s.record(s.string(), s.nullable(s.lazy(() => propertyAttributesSchema))).check(s.maxProperties(256)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
