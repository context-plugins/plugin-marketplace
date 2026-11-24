import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The path details for the Operation. Note: Even though this field is optional, it is
 * required for CreateApiOperation API and we will fail the request if not provided.
 */
export type GoogleCloudApihubV1Path2 = {
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

export const googleCloudApihubV1Path2Schema: Schema<GoogleCloudApihubV1Path2> =
  s.object<GoogleCloudApihubV1Path2>(
    {
      description: s.optional(s.string()),
      path: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
