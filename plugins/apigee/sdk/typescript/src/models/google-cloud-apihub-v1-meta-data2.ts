import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Metadata for the proxy configuration in Apigee X. */
export type GoogleCloudApihubV1MetaData2 = {
  /**
   * Optional. Display name for the server. For apigee target, this will be used as revision display
   * name.
   */
  displayName?: string;
  /**
   * Optional. Description for the server. For apigee target, this will be used as revision
   * description.
   */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1MetaData2Schema: Schema<GoogleCloudApihubV1MetaData2> =
  s.object<GoogleCloudApihubV1MetaData2>(
    {
      displayName: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
