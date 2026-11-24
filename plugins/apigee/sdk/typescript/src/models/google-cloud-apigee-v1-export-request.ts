import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DateRange2Schema,
  type GoogleCloudApigeeV1DateRange2,
} from "./google-cloud-apigee-v1-date-range2.js";

/** Request body for [CreateExportRequest] */
export type GoogleCloudApigeeV1ExportRequest = {
  /**
   * Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the
   * `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab
   * (`\t`).
   */
  csvDelimiter?: string;
  /** Optional. Description of the export job. */
  description?: string;
  /** Required. Name of the preconfigured datastore. */
  datastoreName?: string;
  /**
   * Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to
   * `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property.
   */
  outputFormat?: string;
  /** Required. Display name of the export job. */
  name?: string;
  /** Required. Date range of the data to export. */
  dateRange?: GoogleCloudApigeeV1DateRange2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ExportRequestSchema: Schema<GoogleCloudApigeeV1ExportRequest> =
  s.object<GoogleCloudApigeeV1ExportRequest>(
    {
      csvDelimiter: s.optional(s.string()),
      description: s.optional(s.string()),
      datastoreName: s.optional(s.string()),
      outputFormat: s.optional(s.string()),
      name: s.optional(s.string()),
      dateRange: s.optional(s.lazy(() => googleCloudApigeeV1DateRange2Schema)),
    },
    { additionalProperties: s.json() },
  );
