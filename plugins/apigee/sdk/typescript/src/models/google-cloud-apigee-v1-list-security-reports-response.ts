import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityReportSchema,
  type GoogleCloudApigeeV1SecurityReport,
} from "./google-cloud-apigee-v1-security-report.js";

/** The response for SecurityReports. */
export type GoogleCloudApigeeV1ListSecurityReportsResponse = {
  /** The security reports belong to requested resource name. */
  securityReports?: GoogleCloudApigeeV1SecurityReport[];
  /**
   * If the number of security reports exceeded the page size requested, the token can be used to
   * fetch the next page in a subsequent call. If the response is the last page and there are no
   * more reports to return this field is left empty.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityReportsResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityReportsResponse> =
  s.object<GoogleCloudApigeeV1ListSecurityReportsResponse>(
    {
      securityReports: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityReportSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
