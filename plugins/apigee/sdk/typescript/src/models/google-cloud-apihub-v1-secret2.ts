import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. The name of the SecretManager secret version resource storing the API key. Format:
 * `projects/{project}/secrets/{secrete}/versions/{version}`. The `secretmanager.versions.access`
 * permission should be granted to the service account accessing the secret.
 */
export type GoogleCloudApihubV1Secret2 = {
  /**
   * Required. The resource name of the secret version in the format, format as:
   * `projects/*&#47;secrets/*&#47;versions/*`.
   */
  secretVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Secret2Schema: Schema<GoogleCloudApihubV1Secret2> =
  s.object<GoogleCloudApihubV1Secret2>(
    {
      secretVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
