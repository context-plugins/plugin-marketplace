import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints7InternalSchema, constraints7Schema, type Constraints7 } from "./constraints7.js";
import { Format5, format5Schema } from "./format5.js";

/**
 * A calendar year month, being an integer with 1 or 2 digits. Equivalent to [gYearMonth in XML
 * Schema](https://www.w3.org/TR/xmlschema-2/#gYearMonth)
 */
export type YearMonthField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `yearmonth`. @default "yearmonth" */
  type?: "yearmonth";
  /**
   * There are no format keyword options for `yearmonth`: only `default` is allowed.
   *
   * @default Format5.Default
   */
  format?: Format5;
  /** The following constraints are supported for `yearmonth` fields. */
  constraints?: Constraints7;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const yearMonthFieldProperties: s.Shape<YearMonthField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("yearmonth"), "yearmonth"),
  format: s.defaulted(format5Schema, Format5.Default),
  constraints: s.optional(s.lazy(() => constraints7InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const yearMonthFieldInternalSchema: Schema<YearMonthField> = s.object<YearMonthField>(
  yearMonthFieldProperties,
  { additionalProperties: s.json() },
);

export const yearMonthFieldSchema: Schema<YearMonthField> = s.lazySchema(() =>
  s.object<YearMonthField>(
    {
      ...yearMonthFieldProperties,
      constraints: s.optional(s.lazy(() => constraints7Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
