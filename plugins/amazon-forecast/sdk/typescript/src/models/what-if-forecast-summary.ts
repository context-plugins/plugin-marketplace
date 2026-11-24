import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WhatIfForecastSummary = {
  /** The Amazon Resource Name (ARN) of the what-if forecast. */
  whatIfForecastArn?: string;
  /** The name of the what-if forecast. */
  whatIfForecastName?: string;
  /** The Amazon Resource Name (ARN) of the what-if analysis that contains this what-if forecast. */
  whatIfAnalysisArn?: string;
  /**
   * The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS,
   * CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED
   * The Status of the what-if analysis must be ACTIVE before you can access the analysis.
   */
  status?: string;
  /** If an error occurred, an informational message about the error. */
  message?: string;
  /** When the what-if forecast was created. */
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

export const whatIfForecastSummarySchema: Schema<WhatIfForecastSummary> = s.object<WhatIfForecastSummary>(
  {
    whatIfForecastArn: s.optional(s.string()),
    whatIfForecastName: s.optional(s.string()),
    whatIfAnalysisArn: s.optional(s.string()),
    status: s.optional(s.string()),
    message: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    lastModificationTime: s.optional(s.dateTime()),
    _keysMap: {
      whatIfForecastArn: "WhatIfForecastArn",
      whatIfForecastName: "WhatIfForecastName",
      whatIfAnalysisArn: "WhatIfAnalysisArn",
      status: "Status",
      message: "Message",
      creationTime: "CreationTime",
      lastModificationTime: "LastModificationTime",
    },
  },
  { additionalProperties: s.json() },
);
