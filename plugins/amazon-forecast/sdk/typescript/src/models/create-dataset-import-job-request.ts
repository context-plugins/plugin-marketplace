import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { importModeSchema, type ImportMode } from "./import-mode.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateDatasetImportJobRequest = {
  /**
   * The name for the dataset import job. We recommend including the current timestamp in the name,
   * for example, 20190721DatasetImport. This can help you avoid getting a
   * ResourceAlreadyExistsException exception.
   */
  datasetImportJobName: string;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data to.
   */
  datasetArn: string;
  dataSource: DataSource;
  /**
   * The format of timestamps in the dataset. The format that you specify depends on the
   * DataFrequency specified when the dataset was created. The following formats are supported
   * "yyyy-MM-dd" For the following data frequencies: Y, M, W, and D "yyyy-MM-dd HH:mm:ss" For the
   * following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D If
   * the format isn't specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss".
   */
  timestampFormat?: string;
  /**
   * A single time zone for every item in your dataset. This option is ideal for datasets with all
   * timestamps within a single time zone, or if all timestamps are normalized to a single time
   * zone. Refer to the Joda-Time API for a complete list of valid time zone names.
   */
  timeZone?: string;
  /**
   * Automatically derive time zone information from the geolocation attribute. This option is ideal
   * for datasets that contain timestamps in multiple time zones and those timestamps are expressed
   * in local time.
   */
  useGeolocationForTimeZone?: boolean;
  /**
   * The format of the geolocation attribute. The geolocation attribute can be formatted in one of
   * two ways: LAT_LONG - the latitude and longitude in decimal format (Example: 47.61_-122.33).
   * CC_POSTALCODE (US Only) - the country code (US), followed by the 5-digit ZIP code (Example:
   * US_98121).
   */
  geolocationFormat?: string;
  /**
   * The optional metadata that you apply to the dataset import job to help you categorize and
   * organize them. Each tag consists of a key and an optional value, both of which you define. The
   * following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each
   * resource, each tag key must be unique, and each tag key can have only one value. Maximum key
   * length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in
   * UTF-8. If your tagging schema is used across multiple services and resources, remember that
   * other services may have restrictions on allo
   */
  tags?: Tag[];
  /** The format of the imported data, CSV or PARQUET. The default value is CSV. */
  format?: string;
  /**
   * Specifies whether the dataset import job is a FULL or INCREMENTAL import. A FULL dataset import
   * replaces all of the existing data with the newly imported data. An INCREMENTAL import appends
   * the imported data to the existing data.
   */
  importMode?: ImportMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDatasetImportJobRequestSchema: Schema<CreateDatasetImportJobRequest> =
  s.object<CreateDatasetImportJobRequest>(
    {
      datasetImportJobName: s.string(),
      datasetArn: s.string(),
      dataSource: dataSourceSchema,
      timestampFormat: s.optional(s.string()),
      timeZone: s.optional(s.string()),
      useGeolocationForTimeZone: s.optional(s.boolean()),
      geolocationFormat: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      format: s.optional(s.string()),
      importMode: s.optional(s.lazy(() => importModeSchema)),
      _keysMap: {
        datasetImportJobName: "DatasetImportJobName",
        datasetArn: "DatasetArn",
        dataSource: "DataSource",
        timestampFormat: "TimestampFormat",
        timeZone: "TimeZone",
        useGeolocationForTimeZone: "UseGeolocationForTimeZone",
        geolocationFormat: "GeolocationFormat",
        tags: "Tags",
        format: "Format",
        importMode: "ImportMode",
      },
    },
    { additionalProperties: s.json() },
  );
