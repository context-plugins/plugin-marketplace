import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints3InternalSchema, constraints3Schema, type Constraints3 } from "./constraints3.js";

/** The field contains temporal date values. */
export type DateField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `date`. @default "date" */
  type?: "date";
  /** The format keyword options for `date` are `default`, `any`, and `{PATTERN}`. */
  format?: Record<string, unknown>;
  /** The following constraints are supported for `date` fields. */
  constraints?: Constraints3;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dateFieldProperties: s.Shape<DateField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("date"), "date"),
  format: s.optional(s.record(s.string(), s.unknown())),
  constraints: s.optional(s.lazy(() => constraints3InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const dateFieldInternalSchema: Schema<DateField> = s.object<DateField>(dateFieldProperties, {
  additionalProperties: s.json(),
});

export const dateFieldSchema: Schema<DateField> = s.lazySchema(() =>
  s.object<DateField>(
    {
      ...dateFieldProperties,
      constraints: s.optional(s.lazy(() => constraints3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
