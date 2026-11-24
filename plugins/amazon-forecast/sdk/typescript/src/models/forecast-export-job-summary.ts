import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";

export type ForecastExportJobSummary = {
  /** The Amazon Resource Name (ARN) of the forecast export job. */
  forecastExportJobArn?: string;
  /** The name of the forecast export job. */
  forecastExportJobName?: string;
  destination?: DataDestination;
  /**
   * The status of the forecast export job. States include: ACTIVE CREATE_PENDING,
   * CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING,
   * DELETE_IN_PROGRESS, DELETE_FAILED The Status of the forecast export job must be ACTIVE before
   * you can access the forecast in your S3 bucket.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the forecast export job was created. */
  creationTime?: Date;
  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   * CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING
   * - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When
   * the job finished or failed.
   */
  lastModificationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forecastExportJobSummarySchema: Schema<ForecastExportJobSummary> =
  s.object<ForecastExportJobSummary>(
    {
      forecastExportJobArn: s.optional(s.string()),
      forecastExportJobName: s.optional(s.string()),
      destination: s.optional(s.lazy(() => dataDestinationSchema)),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      _keysMap: {
        forecastExportJobArn: "ForecastExportJobArn",
        forecastExportJobName: "ForecastExportJobName",
        destination: "Destination",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
      },
    },
    { additionalProperties: s.json() },
  );
