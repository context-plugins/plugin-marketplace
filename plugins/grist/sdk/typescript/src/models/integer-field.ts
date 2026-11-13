import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints2InternalSchema, constraints2Schema, type Constraints2 } from "./constraints2.js";
import { Format3, format3Schema } from "./format3.js";

/** The field contains integers - that is whole numbers. */
export type IntegerField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `integer`. @default "integer" */
  type?: "integer";
  /**
   * There are no format keyword options for `integer`: only `default` is allowed.
   *
   * @default Format3.Default
   */
  format?: Format3;
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
  /** The following constraints are supported for `integer` fields. */
  constraints?: Constraints2;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const integerFieldProperties: s.Shape<IntegerField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("integer"), "integer"),
  format: s.defaulted(format3Schema, Format3.Default),
  bareNumber: s.defaulted(s.boolean(), true),
  constraints: s.optional(s.lazy(() => constraints2InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const integerFieldInternalSchema: Schema<IntegerField> = s.object<IntegerField>(
  integerFieldProperties,
  { additionalProperties: s.json() },
);

export const integerFieldSchema: Schema<IntegerField> = s.lazySchema(() =>
  s.object<IntegerField>(
    {
      ...integerFieldProperties,
      constraints: s.optional(s.lazy(() => constraints2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
