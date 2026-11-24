import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The style guide contents. */
export type GoogleCloudApihubV1StyleGuideContents = {
  /** Required. The contents of the style guide. */
  contents?: string;
  /** Required. The mime type of the content. */
  mimeType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1StyleGuideContentsSchema: Schema<GoogleCloudApihubV1StyleGuideContents> =
  s.object<GoogleCloudApihubV1StyleGuideContents>(
    {
      contents: s.optional(s.string()),
      mimeType: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
