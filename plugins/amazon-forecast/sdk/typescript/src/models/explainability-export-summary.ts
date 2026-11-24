import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";

export type ExplainabilityExportSummary = {
  /** The Amazon Resource Name (ARN) of the Explainability export. */
  explainabilityExportArn?: string;
  /** The name of the Explainability export */
  explainabilityExportName?: string;
  destination?: DataDestination;
  /**
   * The status of the Explainability export. States include: ACTIVE CREATE_PENDING,
   * CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING,
   * DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /** Information about any errors that may have occurred during the Explainability export. */
  message?: string;
  /** When the Explainability was created. */
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

export const explainabilityExportSummarySchema: Schema<ExplainabilityExportSummary> =
  s.object<ExplainabilityExportSummary>(
    {
      explainabilityExportArn: s.optional(s.string()),
      explainabilityExportName: s.optional(s.string()),
      destination: s.optional(s.lazy(() => dataDestinationSchema)),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      _keysMap: {
        explainabilityExportArn: "ExplainabilityExportArn",
        explainabilityExportName: "ExplainabilityExportName",
        destination: "Destination",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
      },
    },
    { additionalProperties: s.json() },
  );
