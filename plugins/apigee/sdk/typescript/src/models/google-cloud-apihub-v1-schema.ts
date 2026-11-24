import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The schema details derived from the spec. Currently, this entity is supported for OpenAPI spec
 * only. For OpenAPI spec, this maps to the schema defined in the `definitions` section for OpenAPI
 * 2.0 version and in `components.schemas` section for OpenAPI 3.0 and 3.1 version.
 */
export type GoogleCloudApihubV1Schema = {
  /**
   * Output only. The raw value of the schema definition corresponding to the schema name in the
   * spec.
   */
  rawValue?: string;
  /**
   * Output only. The display name of the schema. This will map to the name of the schema in the
   * spec.
   */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SchemaSchema: Schema<GoogleCloudApihubV1Schema> =
  s.object<GoogleCloudApihubV1Schema>(
    {
      rawValue: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
