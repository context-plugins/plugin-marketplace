import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";

export type DescribeWhatIfForecastExportResponse = {
  /** The Amazon Resource Name (ARN) of the what-if forecast export. */
  whatIfForecastExportArn?: string;
  /** The name of the what-if forecast export. */
  whatIfForecastExportName?: string;
  /**
   * An array of Amazon Resource Names (ARNs) that represent all of the what-if forecasts exported
   * in this resource.
   */
  whatIfForecastArns?: string[];
  destination?: DataDestination;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /**
   * The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   * The Status of the what-if forecast export must be ACTIVE before you can access the forecast
   * export.
   */
  status?: string;
  /** When the what-if forecast export was created. */
  creationTime?: Date;
  /** The approximate time remaining to complete the what-if forecast export, in minutes. */
  estimatedTimeRemainingInMinutes?: number;
  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   * CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING
   * - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When
   * the job finished or failed.
   */
  lastModificationTime?: Date;
  /** The format of the exported data, CSV or PARQUET. */
  format?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeWhatIfForecastExportResponseSchema: Schema<DescribeWhatIfForecastExportResponse> =
  s.object<DescribeWhatIfForecastExportResponse>(
    {
      whatIfForecastExportArn: s.optional(s.string()),
      whatIfForecastExportName: s.optional(s.string()),
      whatIfForecastArns: s.optional(s.array(s.string())),
      destination: s.optional(s.lazy(() => dataDestinationSchema)),
      message: s.optional(s.string()),
      status: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      estimatedTimeRemainingInMinutes: s.optional(s.int()),
      lastModificationTime: s.optional(s.dateTime()),
      format: s.optional(s.string()),
      _keysMap: {
        whatIfForecastExportArn: "WhatIfForecastExportArn",
        whatIfForecastExportName: "WhatIfForecastExportName",
        whatIfForecastArns: "WhatIfForecastArns",
        destination: "Destination",
        message: "Message",
        status: "Status",
        creationTime: "CreationTime",
        estimatedTimeRemainingInMinutes: "EstimatedTimeRemainingInMinutes",
        lastModificationTime: "LastModificationTime",
        format: "Format",
      },
    },
    { additionalProperties: s.json() },
  );
