import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The additional spec contents. */
export type GoogleCloudApihubV1SpecContents1 = {
  /**
   * Required. The mime type of the content for example application/json, application/yaml,
   * application/wsdl etc.
   */
  mimeType?: string;
  /**
   * Required. The contents of the spec. The contents should be base64 encoded while calling the
   * OnePlatform APIs like CreateSpec, UpdateSpec and CollectApiData.
   */
  contents?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SpecContents1Schema: Schema<GoogleCloudApihubV1SpecContents1> =
  s.object<GoogleCloudApihubV1SpecContents1>(
    {
      mimeType: s.optional(s.string()),
      contents: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
