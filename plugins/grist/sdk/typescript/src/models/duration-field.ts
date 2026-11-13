import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints13InternalSchema, constraints13Schema, type Constraints13 } from "./constraints13.js";
import { Format11, format11Schema } from "./format11.js";

/** The field contains a duration of time. */
export type DurationField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `duration`. @default "duration" */
  type?: "duration";
  /**
   * There are no format keyword options for `duration`: only `default` is allowed.
   *
   * @default Format11.Default
   */
  format?: Format11;
  /** The following constraints are supported for `duration` fields. */
  constraints?: Constraints13;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const durationFieldProperties: s.Shape<DurationField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("duration"), "duration"),
  format: s.defaulted(format11Schema, Format11.Default),
  constraints: s.optional(s.lazy(() => constraints13InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const durationFieldInternalSchema: Schema<DurationField> = s.object<DurationField>(
  durationFieldProperties,
  { additionalProperties: s.json() },
);

export const durationFieldSchema: Schema<DurationField> = s.lazySchema(() =>
  s.object<DurationField>(
    {
      ...durationFieldProperties,
      constraints: s.optional(s.lazy(() => constraints13Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
