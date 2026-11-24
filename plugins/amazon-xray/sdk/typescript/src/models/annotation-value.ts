import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Exactly one member is set. */
export type AnnotationValue = {
  /** Value for a Number annotation. */
  numberValue?: number;
  /** Value for a Boolean annotation. */
  booleanValue?: boolean;
  /** Value for a String annotation. */
  stringValue?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const annotationValueSchema: Schema<AnnotationValue> = s.object<AnnotationValue>(
  {
    numberValue: s.optional(s.float64()),
    booleanValue: s.optional(s.boolean()),
    stringValue: s.optional(s.string()),
    _keysMap: {
      numberValue: "NumberValue",
      booleanValue: "BooleanValue",
      stringValue: "StringValue",
    },
  },
  { additionalProperties: s.json() },
);
