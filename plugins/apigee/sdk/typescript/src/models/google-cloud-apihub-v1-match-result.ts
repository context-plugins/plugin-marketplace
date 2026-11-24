import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * MatchResult represents the result of matching a discovered API operation with a catalog API
 * operation.
 */
export type GoogleCloudApihubV1MatchResult = {
  /**
   * Output only. The name of the matched API Operation. Format:
   * `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1MatchResultSchema: Schema<GoogleCloudApihubV1MatchResult> =
  s.object<GoogleCloudApihubV1MatchResult>(
    {
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
