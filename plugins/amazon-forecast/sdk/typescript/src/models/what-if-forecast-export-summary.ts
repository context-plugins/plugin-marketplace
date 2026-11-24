import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";

export type WhatIfForecastExportSummary = {
  /** The Amazon Resource Name (ARN) of the what-if forecast export. */
  whatIfForecastExportArn?: string;
  /**
   * An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the
   * export.
   */
  whatIfForecastArns?: string[];
  /** The what-if forecast export name. */
  whatIfForecastExportName?: string;
  destination?: DataDestination;
  /**
   * The status of the what-if forecast export. States include: ACTIVE CREATE_PENDING,
   * CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING,
   * DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis must be ACTIVE before you
   * can access the analysis.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the what-if forecast export was created. */
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

export const whatIfForecastExportSummarySchema: Schema<WhatIfForecastExportSummary> =
  s.object<WhatIfForecastExportSummary>(
    {
      whatIfForecastExportArn: s.optional(s.string()),
      whatIfForecastArns: s.optional(s.array(s.string())),
      whatIfForecastExportName: s.optional(s.string()),
      destination: s.optional(s.lazy(() => dataDestinationSchema)),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      _keysMap: {
        whatIfForecastExportArn: "WhatIfForecastExportArn",
        whatIfForecastArns: "WhatIfForecastArns",
        whatIfForecastExportName: "WhatIfForecastExportName",
        destination: "Destination",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
      },
    },
    { additionalProperties: s.json() },
  );
