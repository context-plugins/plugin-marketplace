import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints8InternalSchema, constraints8Schema, type Constraints8 } from "./constraints8.js";
import { Format6, format6Schema } from "./format6.js";

/** The field contains boolean (true/false) data. */
export type BooleanField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `boolean`. @default "boolean" */
  type?: "boolean";
  /**
   * There are no format keyword options for `boolean`: only `default` is allowed.
   *
   * @default Format6.Default
   */
  format?: Format6;
  trueValues?: string[];
  falseValues?: string[];
  /** The following constraints are supported for `boolean` fields. */
  constraints?: Constraints8;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const booleanFieldProperties: s.Shape<BooleanField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("boolean"), "boolean"),
  format: s.defaulted(format6Schema, Format6.Default),
  trueValues: s.optional(s.array(s.string())),
  falseValues: s.optional(s.array(s.string())),
  constraints: s.optional(s.lazy(() => constraints8InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const booleanFieldInternalSchema: Schema<BooleanField> = s.object<BooleanField>(
  booleanFieldProperties,
  { additionalProperties: s.json() },
);

export const booleanFieldSchema: Schema<BooleanField> = s.lazySchema(() =>
  s.object<BooleanField>(
    {
      ...booleanFieldProperties,
      trueValues: s.optional(s.array(s.string()).check(s.minLength(1))),
      falseValues: s.optional(s.array(s.string()).check(s.minLength(1))),
      constraints: s.optional(s.lazy(() => constraints8Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
