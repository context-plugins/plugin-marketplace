import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { textTypeSchema, type TextType } from "./text-type.js";

/** The extracted value with confidence and source reference */
export type FieldValue = {
  /** Extracted value, which may be a string, number, or object depending on field type */
  value?: Record<string, unknown>;
  /** Confidence score for the extracted value (0.0 to 1.0) */
  confidence?: number;
  /** OCR confidence score for the text underlying this value */
  ocrConfidence?: number;
  /** Whether the source text was printed or handwritten */
  textType?: TextType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fieldValueProperties: s.Shape<FieldValue> = {
  value: s.optional(s.record(s.string(), s.unknown())),
  confidence: s.optional(s.float64()),
  ocrConfidence: s.optional(s.float64()),
  textType: s.optional(s.lazy(() => textTypeSchema)),
  _keysMap: {
    value: "Value",
    confidence: "Confidence",
    ocrConfidence: "OcrConfidence",
    textType: "TextType",
  },
};

export const fieldValueInternalSchema: Schema<FieldValue> = s.object<FieldValue>(fieldValueProperties, {
  additionalProperties: s.json(),
});

export const fieldValueSchema: Schema<FieldValue> = s.lazySchema(() =>
  s.object<FieldValue>(
    {
      ...fieldValueProperties,
      confidence: s.optional(s.float64().check(s.gte(0), s.lte(1))),
      ocrConfidence: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
