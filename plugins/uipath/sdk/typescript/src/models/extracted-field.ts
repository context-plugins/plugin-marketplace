import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldValueInternalSchema, fieldValueSchema, type FieldValue } from "./field-value.js";

/** A single extracted field with its value and confidence metadata */
export type ExtractedField = {
  /** Identifier of the extracted field as defined in the extractor schema */
  fieldId?: string;
  /** Display name of the extracted field */
  fieldName?: string;
  /** Whether the field was not found in the document */
  isMissing?: boolean;
  /** The extracted value with confidence and source reference */
  value?: FieldValue;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const extractedFieldProperties: s.Shape<ExtractedField> = {
  fieldId: s.optional(s.string()),
  fieldName: s.optional(s.string()),
  isMissing: s.optional(s.boolean()),
  value: s.optional(s.lazy(() => fieldValueInternalSchema)),
  _keysMap: {
    fieldId: "FieldId",
    fieldName: "FieldName",
    isMissing: "IsMissing",
    value: "Value",
  },
};

export const extractedFieldInternalSchema: Schema<ExtractedField> = s.object<ExtractedField>(
  extractedFieldProperties,
  { additionalProperties: s.json() },
);

export const extractedFieldSchema: Schema<ExtractedField> = s.lazySchema(() =>
  s.object<ExtractedField>(
    {
      ...extractedFieldProperties,
      value: s.optional(s.lazy(() => fieldValueSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
