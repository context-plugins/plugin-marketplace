import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { constraints11InternalSchema, constraints11Schema, type Constraints11 } from "./constraints11.js";
import { Format9, format9Schema } from "./format9.js";

/** The field contains a JSON object according to GeoJSON or TopoJSON */
export type GeoJsonField = {
  /** A name for this field. */
  name: string;
  /** A human-readable title. */
  title?: string;
  /** A text description. Markdown is encouraged. */
  description?: string;
  /** An example value for the field. */
  example?: string;
  /** The type keyword, which `MUST` be a value of `geojson`. @default "geojson" */
  type?: "geojson";
  /**
   * The format keyword options for `geojson` are `default` and `topojson`.
   *
   * @default Format9.Default
   */
  format?: Format9;
  /** The following constraints are supported for `geojson` fields. */
  constraints?: Constraints11;
  /** The RDF type for this field. */
  rdfType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const geoJsonFieldProperties: s.Shape<GeoJsonField> = {
  name: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  example: s.optional(s.string()),
  type: s.defaulted(s.literal("geojson"), "geojson"),
  format: s.defaulted(format9Schema, Format9.Default),
  constraints: s.optional(s.lazy(() => constraints11InternalSchema)),
  rdfType: s.optional(s.string()),
};

export const geoJsonFieldInternalSchema: Schema<GeoJsonField> = s.object<GeoJsonField>(
  geoJsonFieldProperties,
  { additionalProperties: s.json() },
);

export const geoJsonFieldSchema: Schema<GeoJsonField> = s.lazySchema(() =>
  s.object<GeoJsonField>(
    {
      ...geoJsonFieldProperties,
      constraints: s.optional(s.lazy(() => constraints11Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
