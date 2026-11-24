import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for GenerateUploadUrl method. */
export type GoogleCloudApigeeV1GenerateUploadUrlResponse = {
  /** The Google Cloud Storage signed URL that can be used to upload a new Archive zip file. */
  uploadUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GenerateUploadUrlResponseSchema: Schema<GoogleCloudApigeeV1GenerateUploadUrlResponse> =
  s.object<GoogleCloudApigeeV1GenerateUploadUrlResponse>(
    {
      uploadUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
