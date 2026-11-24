import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateValueSchema, type DateValue } from "./date-value.js";
import { enumOptionSchema, type EnumOption } from "./enum-option.js";
import {
  resourceSubtype1AsanaStoriesApiSchema,
  type ResourceSubtype1AsanaStoriesApi,
} from "./resource-subtype1-asana-stories-api.js";
import { typeSchema, type Type } from "./type.js";

export type CustomFieldCompactAsanaStoriesApi = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the custom field. */
  name?: string;
  /** The type of the custom field. Must be one of the given values. */
  resourceSubtype?: ResourceSubtype1AsanaStoriesApi;
  /**
   * *Deprecated: new integrations should prefer the resource_subtype field.* The type of the custom
   * field. Must be one of the given values.
   */
  type?: Type;
  /**
   * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the
   * possible values which an `enum` custom field can adopt. To modify the enum options, refer to
   * [working with enum options](/docs/create-an-enum-option).
   */
  enumOptions?: EnumOption[];
  /** *Conditional*. Determines if the custom field is enabled or not. */
  enabled?: boolean;
  /**
   * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen
   * date (and optionally, time) value of a `date` custom field. If no date is selected, the value
   * of `date_value` will be `null`.
   */
  dateValue?: DateValue;
  enumValue?: EnumOption;
  /**
   * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen
   * values of a `multi_enum` custom field.
   */
  multiEnumValues?: EnumOption[];
  /** *Conditional*. This number is the value of a `number` custom field. */
  numberValue?: number;
  /** *Conditional*. This string is the value of a `text` custom field. */
  textValue?: string;
  /**
   * A string representation for the value of the custom field. Integrations that don't require the
   * underlying type should use this field to read values. Using this field will future-proof an app
   * against new custom field types.
   */
  displayValue?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldCompactAsanaStoriesApiSchema: Schema<CustomFieldCompactAsanaStoriesApi> =
  s.object<CustomFieldCompactAsanaStoriesApi>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      name: s.optional(s.string()),
      resourceSubtype: s.optional(s.lazy(() => resourceSubtype1AsanaStoriesApiSchema)),
      type: s.optional(s.lazy(() => typeSchema)),
      enumOptions: s.optional(s.array(s.lazy(() => enumOptionSchema))),
      enabled: s.optional(s.boolean()),
      dateValue: s.optional(s.lazy(() => dateValueSchema)),
      enumValue: s.optional(s.lazy(() => enumOptionSchema)),
      multiEnumValues: s.optional(s.array(s.lazy(() => enumOptionSchema))),
      numberValue: s.optional(s.float64()),
      textValue: s.optional(s.string()),
      displayValue: s.optionalNullable(s.string()),
      _keysMap: {
        resourceType: "resource_type",
        resourceSubtype: "resource_subtype",
        enumOptions: "enum_options",
        dateValue: "date_value",
        enumValue: "enum_value",
        multiEnumValues: "multi_enum_values",
        numberValue: "number_value",
        textValue: "text_value",
        displayValue: "display_value",
      },
    },
    { additionalProperties: s.json() },
  );
