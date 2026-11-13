import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints4InternalSchema, constraints4Schema, type Constraints4 } from "./constraints4.js";

/** The field contains temporal time values. */
export type TimeField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `time`. @default "time" */
  type?: "time";
  /** The format keyword options for `time` are `default`, `any`, and `{PATTERN}`. */
  format?: Record<string, unknown>;
  /** The following constraints are supported for `time` fields. */
  constraints?: Constraints4;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const timeFieldProperties: s.Shape<TimeField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("time"), "time"),
  format: s.optional(s.record(s.string(), s.unknown())),
  constraints: s.optional(s.lazy(() => constraints4InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const timeFieldInternalSchema: Schema<TimeField> = s.object<TimeField>(timeFieldProperties, {
  additionalProperties: s.json(),
});

export const timeFieldSchema: Schema<TimeField> = s.lazySchema(() =>
  s.object<TimeField>(
    {
      ...timeFieldProperties,
      constraints: s.optional(s.lazy(() => constraints4Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
