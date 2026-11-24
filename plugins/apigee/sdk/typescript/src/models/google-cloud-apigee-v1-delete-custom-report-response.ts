import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1DeleteCustomReportResponse = {
  /** The response contains only a message field. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeleteCustomReportResponseSchema: Schema<GoogleCloudApigeeV1DeleteCustomReportResponse> =
  s.object<GoogleCloudApigeeV1DeleteCustomReportResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
