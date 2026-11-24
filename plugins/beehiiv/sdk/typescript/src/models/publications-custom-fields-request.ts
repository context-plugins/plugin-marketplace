import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldTypeSchema, type CustomFieldType } from "./custom-field-type.js";

export type PublicationsCustomFieldsRequest = {
  /** The type of value being stored in the custom field. */
  kind: CustomFieldType;
  display: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsCustomFieldsRequestSchema: Schema<PublicationsCustomFieldsRequest> =
  s.object<PublicationsCustomFieldsRequest>(
    {
      kind: customFieldTypeSchema,
      display: s.string(),
    },
    { additionalProperties: s.json() },
  );
