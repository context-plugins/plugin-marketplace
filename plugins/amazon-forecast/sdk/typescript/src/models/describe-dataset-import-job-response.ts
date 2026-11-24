import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { importMode1Schema, type ImportMode1 } from "./import-mode1.js";
import { statisticsSchema, type Statistics } from "./statistics.js";

export type DescribeDatasetImportJobResponse = {
  /** The name of the dataset import job. */
  datasetImportJobName?: string;
  /** The ARN of the dataset import job. */
  datasetImportJobArn?: string;
  /** The Amazon Resource Name (ARN) of the dataset that the training data was imported to. */
  datasetArn?: string;
  /**
   * The format of timestamps in the dataset. The format that you specify depends on the
   * DataFrequency specified when the dataset was created. The following formats are supported
   * "yyyy-MM-dd" For the following data frequencies: Y, M, W, and D "yyyy-MM-dd HH:mm:ss" For the
   * following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D
   */
  timestampFormat?: string;
  /** The single time zone applied to every item in the dataset */
  timeZone?: string;
  /** Whether TimeZone is automatically derived from the geolocation attribute. */
  useGeolocationForTimeZone?: boolean;
  /** The format of the geolocation attribute. Valid Values:"LAT_LONG" and "CC_POSTALCODE". */
  geolocationFormat?: string;
  dataSource?: DataSource;
  /** The estimated time remaining in minutes for the dataset import job to complete. */
  estimatedTimeRemainingInMinutes?: number;
  /** Statistical information about each field in the input data. */
  fieldStatistics?: Record<string, Statistics>;
  /** The size of the dataset in gigabytes (GB) after the import job has finished. */
  dataSize?: number;
  /**
   * The status of the dataset import job. States include: ACTIVE CREATE_PENDING,
   * CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   * CREATE_STOPPING, CREATE_STOPPED
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the dataset import job was created. */
  creationTime?: Date;
  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   * CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING
   * - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When
   * the job finished or failed.
   */
  lastModificationTime?: Date;
  /** The format of the imported data, CSV or PARQUET. */
  format?: string;
  /** The import mode of the dataset import job, FULL or INCREMENTAL. */
  importMode?: ImportMode1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeDatasetImportJobResponseSchema: Schema<DescribeDatasetImportJobResponse> =
  s.object<DescribeDatasetImportJobResponse>(
    {
      datasetImportJobName: s.optional(s.string()),
      datasetImportJobArn: s.optional(s.string()),
      datasetArn: s.optional(s.string()),
      timestampFormat: s.optional(s.string()),
      timeZone: s.optional(s.string()),
      useGeolocationForTimeZone: s.optional(s.boolean()),
      geolocationFormat: s.optional(s.string()),
      dataSource: s.optional(s.lazy(() => dataSourceSchema)),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      fieldStatistics: s.optional(
        s.record(
          s.string(),
          s.lazy(() => statisticsSchema),
        ),
      ),
      dataSize: s.optional(s.float64()),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      format: s.optional(s.string()),
      importMode: s.optional(s.lazy(() => importMode1Schema)),
      _keysMap: {
        datasetImportJobName: "DatasetImportJobName",
        datasetImportJobArn: "DatasetImportJobArn",
        datasetArn: "DatasetArn",
        timestampFormat: "TimestampFormat",
        timeZone: "TimeZone",
        useGeolocationForTimeZone: "UseGeolocationForTimeZone",
        geolocationFormat: "GeolocationFormat",
        dataSource: "DataSource",
        estimatedTimeRemainingInMinutes: "EstimatedTimeRemainingInMinutes",
        fieldStatistics: "FieldStatistics",
        dataSize: "DataSize",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        format: "Format",
        importMode: "ImportMode",
      },
    },
    { additionalProperties: s.json() },
  );
