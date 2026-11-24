import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for GenerateDownloadUrl method. */
export type GoogleCloudApigeeV1GenerateDownloadUrlResponse = {
  /** The Google Cloud Storage signed URL that can be used to download the Archive zip file. */
  downloadUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GenerateDownloadUrlResponseSchema: Schema<GoogleCloudApigeeV1GenerateDownloadUrlResponse> =
  s.object<GoogleCloudApigeeV1GenerateDownloadUrlResponse>(
    {
      downloadUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
