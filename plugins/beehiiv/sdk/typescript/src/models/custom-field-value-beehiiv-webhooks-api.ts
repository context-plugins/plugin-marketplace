import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldKindSchema, type CustomFieldKind } from "./custom-field-kind.js";

export type CustomFieldValueBeehiivWebhooksApi = {
  /** The display name of the custom field. */
  name: string;
  /** The type of the custom field. */
  kind: CustomFieldKind;
  /**
   * The formatted value of the custom field. The actual JSON type depends on the kind: - string:
   * the value as a string - integer, number: the value as a number (JSON number type) - boolean:
   * true or false (JSON boolean type) - date: formatted date string (e.g., "Jan 15, 2024") -
   * datetime: formatted date and time string (e.g., "Jan 15, 2024 3:45 PM") - list: comma-separated
   * values as a string
   */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldValueBeehiivWebhooksApiSchema: Schema<CustomFieldValueBeehiivWebhooksApi> =
  s.object<CustomFieldValueBeehiivWebhooksApi>(
    {
      name: s.string(),
      kind: customFieldKindSchema,
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
