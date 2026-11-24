import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Secret provides a reference to entries in Secret Manager. */
export type GoogleCloudApihubV1Secret = {
  /**
   * Required. The resource name of the secret version in the format, format as:
   * `projects/*&#47;secrets/*&#47;versions/*`.
   */
  secretVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SecretSchema: Schema<GoogleCloudApihubV1Secret> =
  s.object<GoogleCloudApihubV1Secret>(
    {
      secretVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
