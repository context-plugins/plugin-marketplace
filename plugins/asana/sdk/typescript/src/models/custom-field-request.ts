import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asanaCreatedFieldSchema, type AsanaCreatedField } from "./asana-created-field.js";
import { customLabelPositionSchema, type CustomLabelPosition } from "./custom-label-position.js";
import { dateValueSchema, type DateValue } from "./date-value.js";
import { enumOptionSchema, type EnumOption } from "./enum-option.js";
import { formatSchema, type Format } from "./format.js";
import {
  resourceSubtypeAsanaCustomFieldSettingsApiSchema,
  type ResourceSubtypeAsanaCustomFieldSettingsApi,
} from "./resource-subtype-asana-custom-field-settings-api.js";
import { typeSchema, type Type } from "./type.js";

export type CustomFieldRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the custom field. */
  name?: string;
  /** The type of the custom field. Must be one of the given values. */
  resourceSubtype?: ResourceSubtypeAsanaCustomFieldSettingsApi;
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
  /** [Opt In](/docs/input-output-options). The description of the custom field. */
  description?: string;
  /**
   * Only relevant for custom fields of type ‘Number’. This field dictates the number of places
   * after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so
   * on. Must be between 0 and 6, inclusive. For percentage format, this may be unintuitive, as a
   * value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to
   * 0.25 being displayed as 25%. The identifier format will always have a precision of 0.
   */
  precision?: number;
  /** The format of this custom field. */
  format?: Format;
  /**
   * ISO 4217 currency code to format this custom field. This will be null if the `format` is not
   * `currency`.
   */
  currencyCode?: string | null;
  /**
   * This is the string that appears next to the custom field value. This will be null if the
   * `format` is not `custom`.
   */
  customLabel?: string | null;
  /**
   * Only relevant for custom fields with `custom` format. This depicts where to place the custom
   * label. This will be null if the `format` is not `custom`.
   */
  customLabelPosition?: CustomLabelPosition;
  /**
   * This flag describes whether this custom field is available to every container in the workspace.
   * Before project-specific custom fields, this field was always true.
   */
  isGlobalToWorkspace?: boolean;
  /**
   * *Conditional*. This flag describes whether a follower of a task with this field should receive
   * inbox notifications from changes to this field.
   */
  hasNotificationsEnabled?: boolean;
  /**
   * *Conditional*. A unique identifier to associate this field with the template source of truth.
   */
  asanaCreatedField?: AsanaCreatedField | null;
  /** *Create-Only* The workspace to create a custom field in. */
  workspace: string;
  /**
   * *Conditional*. Only relevant for custom fields of type `people`. This array of user GIDs
   * reflects the users to be written to a `people` custom field. Note that *write* operations will
   * replace existing users (if any) in the custom field with the users specified in this array.
   */
  peopleValue?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldRequestSchema: Schema<CustomFieldRequest> = s.object<CustomFieldRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    resourceSubtype: s.optional(s.lazy(() => resourceSubtypeAsanaCustomFieldSettingsApiSchema)),
    type: s.optional(s.lazy(() => typeSchema)),
    enumOptions: s.optional(s.array(s.lazy(() => enumOptionSchema))),
    enabled: s.optional(s.boolean()),
    dateValue: s.optional(s.lazy(() => dateValueSchema)),
    enumValue: s.optional(s.lazy(() => enumOptionSchema)),
    multiEnumValues: s.optional(s.array(s.lazy(() => enumOptionSchema))),
    numberValue: s.optional(s.float64()),
    textValue: s.optional(s.string()),
    displayValue: s.optionalNullable(s.string()),
    description: s.optional(s.string()),
    precision: s.optional(s.int()),
    format: s.optional(s.lazy(() => formatSchema)),
    currencyCode: s.optionalNullable(s.string()),
    customLabel: s.optionalNullable(s.string()),
    customLabelPosition: s.optional(s.lazy(() => customLabelPositionSchema)),
    isGlobalToWorkspace: s.optional(s.boolean()),
    hasNotificationsEnabled: s.optional(s.boolean()),
    asanaCreatedField: s.optionalNullable(s.lazy(() => asanaCreatedFieldSchema)),
    workspace: s.string(),
    peopleValue: s.optional(s.array(s.string())),
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
      currencyCode: "currency_code",
      customLabel: "custom_label",
      customLabelPosition: "custom_label_position",
      isGlobalToWorkspace: "is_global_to_workspace",
      hasNotificationsEnabled: "has_notifications_enabled",
      asanaCreatedField: "asana_created_field",
      peopleValue: "people_value",
    },
  },
  { additionalProperties: s.json() },
);
