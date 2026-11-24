import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Result is available only after the query is completed. */
export type GoogleCloudApigeeV1SecurityReportResultMetadata1 = {
  /**
   * Output only. Expire_time is set to 7 days after report creation. Query result will be
   * unaccessable after this time. Example: "2021-05-04T13:38:52-07:00"
   */
  expires?: string;
  /**
   * Self link of the query results. Example:
   * `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`
   * or following format if query is running at host level:
   * `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`
   */
  self?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityReportResultMetadata1Schema: Schema<GoogleCloudApigeeV1SecurityReportResultMetadata1> =
  s.object<GoogleCloudApigeeV1SecurityReportResultMetadata1>(
    {
      expires: s.optional(s.string()),
      self: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
