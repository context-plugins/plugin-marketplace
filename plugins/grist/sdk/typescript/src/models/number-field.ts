import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints1InternalSchema, constraints1Schema, type Constraints1 } from "./constraints1.js";
import { Format2, format2Schema } from "./format2.js";

/** The field contains numbers of any kind including decimals. */
export type NumberField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `number`. @default "number" */
  type?: "number";
  /**
   * There are no format keyword options for `number`: only `default` is allowed.
   *
   * @default Format2.Default
   */
  format?: Format2;
  /**
   * a boolean field with a default of `true`. If `true` the physical contents of this field must
   * follow the formatting constraints already set out. If `false` the contents of this field may
   * contain leading and/or trailing non-numeric characters (which implementors MUST therefore
   * strip). The purpose of `bareNumber` is to allow publishers to publish numeric data that
   * contains trailing characters such as percentages e.g. `95%` or leading characters such as
   * currencies e.g. `€95` or `EUR 95`. Note that it is entirely up to implementors what, if
   * anything, they do with stripped text.
   *
   * @default true
   */
  bareNumber?: boolean;
  /**
   * A string whose value is used to represent a decimal point within the number. The default value
   * is `.`.
   */
  decimalChar?: string;
  /**
   * A string whose value is used to group digits within the number. The default value is `null`. A
   * common value is `,` e.g. '100,000'.
   */
  groupChar?: string;
  /** The following constraints are supported for `number` fields. */
  constraints?: Constraints1;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const numberFieldProperties: s.Shape<NumberField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("number"), "number"),
  format: s.defaulted(format2Schema, Format2.Default),
  bareNumber: s.defaulted(s.boolean(), true),
  decimalChar: s.optional(s.string()),
  groupChar: s.optional(s.string()),
  constraints: s.optional(s.lazy(() => constraints1InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const numberFieldInternalSchema: Schema<NumberField> = s.object<NumberField>(numberFieldProperties, {
  additionalProperties: s.json(),
});

export const numberFieldSchema: Schema<NumberField> = s.lazySchema(() =>
  s.object<NumberField>(
    {
      ...numberFieldProperties,
      constraints: s.optional(s.lazy(() => constraints1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
