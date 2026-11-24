import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. The value of a schema definition. */
export type GoogleCloudApihubV1Schema2 = {
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

export const googleCloudApihubV1Schema2Schema: Schema<GoogleCloudApihubV1Schema2> =
  s.object<GoogleCloudApihubV1Schema2>(
    {
      rawValue: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
