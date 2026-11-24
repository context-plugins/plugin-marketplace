import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The config variable value in case of config variable of type secret. */
export type GoogleCloudApihubV1Secret5 = {
  /**
   * Required. The resource name of the secret version in the format, format as:
   * `projects/*&#47;secrets/*&#47;versions/*`.
   */
  secretVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Secret5Schema: Schema<GoogleCloudApihubV1Secret5> =
  s.object<GoogleCloudApihubV1Secret5>(
    {
      secretVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
