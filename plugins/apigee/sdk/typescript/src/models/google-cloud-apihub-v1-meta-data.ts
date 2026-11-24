import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata for the server configuration in Apigee X. */
export type GoogleCloudApihubV1MetaData = {
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

export const googleCloudApihubV1MetaDataSchema: Schema<GoogleCloudApihubV1MetaData> =
  s.object<GoogleCloudApihubV1MetaData>(
    {
      displayName: s.optional(s.string()),
      description: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
