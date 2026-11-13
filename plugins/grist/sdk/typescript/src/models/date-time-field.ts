import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints5InternalSchema, constraints5Schema, type Constraints5 } from "./constraints5.js";

/** The field contains temporal datetime values. */
export type DateTimeField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `datetime`. @default "datetime" */
  type?: "datetime";
  /** The format keyword options for `datetime` are `default`, `any`, and `{PATTERN}`. */
  format?: Record<string, unknown>;
  /** The following constraints are supported for `datetime` fields. */
  constraints?: Constraints5;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dateTimeFieldProperties: s.Shape<DateTimeField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("datetime"), "datetime"),
  format: s.optional(s.record(s.string(), s.unknown())),
  constraints: s.optional(s.lazy(() => constraints5InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const dateTimeFieldInternalSchema: Schema<DateTimeField> = s.object<DateTimeField>(
  dateTimeFieldProperties,
  { additionalProperties: s.json() },
);

export const dateTimeFieldSchema: Schema<DateTimeField> = s.lazySchema(() =>
  s.object<DateTimeField>(
    {
      ...dateTimeFieldProperties,
      constraints: s.optional(s.lazy(() => constraints5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
