import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints9InternalSchema, constraints9Schema, type Constraints9 } from "./constraints9.js";
import { Format7, format7Schema } from "./format7.js";

/** The field contains data which can be parsed as a valid JSON object. */
export type ObjectField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `object`. @default "object" */
  type?: "object";
  /**
   * There are no format keyword options for `object`: only `default` is allowed.
   *
   * @default Format7.Default
   */
  format?: Format7;
  /** The following constraints apply for `object` fields. */
  constraints?: Constraints9;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const objectFieldProperties: s.Shape<ObjectField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("object"), "object"),
  format: s.defaulted(format7Schema, Format7.Default),
  constraints: s.optional(s.lazy(() => constraints9InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const objectFieldInternalSchema: Schema<ObjectField> = s.object<ObjectField>(objectFieldProperties, {
  additionalProperties: s.json(),
});

export const objectFieldSchema: Schema<ObjectField> = s.lazySchema(() =>
  s.object<ObjectField>(
    {
      ...objectFieldProperties,
      constraints: s.optional(s.lazy(() => constraints9Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
