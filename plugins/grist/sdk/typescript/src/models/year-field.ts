import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints6InternalSchema, constraints6Schema, type Constraints6 } from "./constraints6.js";
import { Format4, format4Schema } from "./format4.js";

/**
 * A calendar year, being an integer with 4 digits. Equivalent to [gYear in XML
 * Schema](https://www.w3.org/TR/xmlschema-2/#gYear)
 */
export type YearField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `year`. @default "year" */
  type?: "year";
  /**
   * There are no format keyword options for `year`: only `default` is allowed.
   *
   * @default Format4.Default
   */
  format?: Format4;
  /** The following constraints are supported for `year` fields. */
  constraints?: Constraints6;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const yearFieldProperties: s.Shape<YearField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("year"), "year"),
  format: s.defaulted(format4Schema, Format4.Default),
  constraints: s.optional(s.lazy(() => constraints6InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const yearFieldInternalSchema: Schema<YearField> = s.object<YearField>(yearFieldProperties, {
  additionalProperties: s.json(),
});

export const yearFieldSchema: Schema<YearField> = s.lazySchema(() =>
  s.object<YearField>(
    {
      ...yearFieldProperties,
      constraints: s.optional(s.lazy(() => constraints6Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
