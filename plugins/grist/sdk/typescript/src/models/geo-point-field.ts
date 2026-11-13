import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints10InternalSchema, constraints10Schema, type Constraints10 } from "./constraints10.js";
import { Format8, format8Schema } from "./format8.js";

/** The field contains data describing a geographic point. */
export type GeoPointField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `geopoint`. @default "geopoint" */
  type?: "geopoint";
  /**
   * The format keyword options for `geopoint` are `default`,`array`, and `object`.
   *
   * @default Format8.Default
   */
  format?: Format8;
  /** The following constraints are supported for `geopoint` fields. */
  constraints?: Constraints10;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const geoPointFieldProperties: s.Shape<GeoPointField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("geopoint"), "geopoint"),
  format: s.defaulted(format8Schema, Format8.Default),
  constraints: s.optional(s.lazy(() => constraints10InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const geoPointFieldInternalSchema: Schema<GeoPointField> = s.object<GeoPointField>(
  geoPointFieldProperties,
  { additionalProperties: s.json() },
);

export const geoPointFieldSchema: Schema<GeoPointField> = s.lazySchema(() =>
  s.object<GeoPointField>(
    {
      ...geoPointFieldProperties,
      constraints: s.optional(s.lazy(() => constraints10Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
