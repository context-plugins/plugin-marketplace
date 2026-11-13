import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraintsInternalSchema, constraintsSchema, type Constraints } from "./constraints.js";
import { Format1, format1Schema } from "./format1.js";
import { type1Schema, type Type1 } from "./type1.js";

/** The field contains strings, that is, sequences of characters. */
export type StringField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `string`. */
  type?: Type1;
  /**
   * The format keyword options for `string` are `default`, `email`, `uri`, `binary`, and `uuid`.
   *
   * @default Format1.Default
   */
  format?: Format1;
  /** The following constraints are supported for `string` fields. */
  constraints?: Constraints;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stringFieldProperties: s.Shape<StringField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.optional(s.lazy(() => type1Schema)),
  format: s.defaulted(format1Schema, Format1.Default),
  constraints: s.optional(s.lazy(() => constraintsInternalSchema)),
  rdfType: s.optional(s.string()),
};

export const stringFieldInternalSchema: Schema<StringField> = s.object<StringField>(stringFieldProperties, {
  additionalProperties: s.json(),
});

export const stringFieldSchema: Schema<StringField> = s.lazySchema(() =>
  s.object<StringField>(
    {
      ...stringFieldProperties,
      constraints: s.optional(s.lazy(() => constraintsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
