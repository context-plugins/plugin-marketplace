import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1CustomReportSchema,
  type GoogleCloudApigeeV1CustomReport,
} from "./google-cloud-apigee-v1-custom-report.js";

/** This message encapsulates a list of custom report definitions */
export type GoogleCloudApigeeV1ListCustomReportsResponse = {
  qualifier?: GoogleCloudApigeeV1CustomReport[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListCustomReportsResponseSchema: Schema<GoogleCloudApigeeV1ListCustomReportsResponse> =
  s.object<GoogleCloudApigeeV1ListCustomReportsResponse>(
    {
      qualifier: s.optional(s.array(s.lazy(() => googleCloudApigeeV1CustomReportSchema))),
    },
    { additionalProperties: s.json() },
  );
