import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for certain delete operations. */
export type GoogleCloudApigeeV1DeleteResponse = {
  /** Status of the operation. */
  status?: string;
  /** Unique ID of the request. */
  requestId?: string;
  /** Unique error code for the request, if any. */
  errorCode?: string;
  /** Description of the operation. */
  message?: string;
  /** Google Cloud name of deleted resource. */
  gcpResource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeleteResponseSchema: Schema<GoogleCloudApigeeV1DeleteResponse> =
  s.object<GoogleCloudApigeeV1DeleteResponse>(
    {
      status: s.optional(s.string()),
      requestId: s.optional(s.string()),
      errorCode: s.optional(s.string()),
      message: s.optional(s.string()),
      gcpResource: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
