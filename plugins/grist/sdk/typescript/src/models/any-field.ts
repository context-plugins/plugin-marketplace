import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints14InternalSchema, constraints14Schema, type Constraints14 } from "./constraints14.js";

/**
 * Any value is accepted, including values that are not captured by the type/format/constraint
 * requirements of the specification.
 */
export type AnyField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `any`. @default "any" */
  type?: "any";
  /** The following constraints apply to `any` fields. */
  constraints?: Constraints14;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const anyFieldProperties: s.Shape<AnyField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("any"), "any"),
  constraints: s.optional(s.lazy(() => constraints14InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const anyFieldInternalSchema: Schema<AnyField> = s.object<AnyField>(anyFieldProperties, {
  additionalProperties: s.json(),
});

export const anyFieldSchema: Schema<AnyField> = s.lazySchema(() =>
  s.object<AnyField>(
    {
      ...anyFieldProperties,
      constraints: s.optional(s.lazy(() => constraints14Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
