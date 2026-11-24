import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The path details derived from the spec. */
export type GoogleCloudApihubV1Path = {
  /** Optional. A short description for the path applicable to all operations. */
  description?: string;
  /**
   * Optional. Complete path relative to server endpoint. Note: Even though this field is optional,
   * it is required for CreateApiOperation API and we will fail the request if not provided.
   */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1PathSchema: Schema<GoogleCloudApihubV1Path> =
  s.object<GoogleCloudApihubV1Path>(
    {
      description: s.optional(s.string()),
      path: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
