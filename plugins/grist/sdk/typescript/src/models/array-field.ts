import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints12InternalSchema, constraints12Schema, type Constraints12 } from "./constraints12.js";
import { Format10, format10Schema } from "./format10.js";

/** The field contains data which can be parsed as a valid JSON array. */
export type ArrayField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `array`. @default "array" */
  type?: "array";
  /**
   * There are no format keyword options for `array`: only `default` is allowed.
   *
   * @default Format10.Default
   */
  format?: Format10;
  /** The following constraints apply for `array` fields. */
  constraints?: Constraints12;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const arrayFieldProperties: s.Shape<ArrayField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("array"), "array"),
  format: s.defaulted(format10Schema, Format10.Default),
  constraints: s.optional(s.lazy(() => constraints12InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const arrayFieldInternalSchema: Schema<ArrayField> = s.object<ArrayField>(arrayFieldProperties, {
  additionalProperties: s.json(),
});

export const arrayFieldSchema: Schema<ArrayField> = s.lazySchema(() =>
  s.object<ArrayField>(
    {
      ...arrayFieldProperties,
      constraints: s.optional(s.lazy(() => constraints12Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
