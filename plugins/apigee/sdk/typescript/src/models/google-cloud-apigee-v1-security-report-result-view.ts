import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityReportMetadata2Schema,
  type GoogleCloudApigeeV1SecurityReportMetadata2,
} from "./google-cloud-apigee-v1-security-report-metadata2.js";

/** The response for security report result view APIs. */
export type GoogleCloudApigeeV1SecurityReportResultView = {
  /**
   * Rows of security report result. Each row is a JSON object. Example: {sum(message_count): 1,
   * developer_app: "(not set)",…}
   */
  rows?: Record<string, unknown>[];
  /** Metadata contains information like metrics, dimenstions etc of the security report. */
  metadata?: GoogleCloudApigeeV1SecurityReportMetadata2;
  /** Error message when there is a failure. */
  error?: string;
  /** State of retrieving ResultView. */
  state?: string;
  /** Error code when there is a failure. */
  code?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityReportResultViewSchema: Schema<GoogleCloudApigeeV1SecurityReportResultView> =
  s.object<GoogleCloudApigeeV1SecurityReportResultView>(
    {
      rows: s.optional(s.array(s.record(s.string(), s.unknown()))),
      metadata: s.optional(s.lazy(() => googleCloudApigeeV1SecurityReportMetadata2Schema)),
      error: s.optional(s.string()),
      state: s.optional(s.string()),
      code: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
