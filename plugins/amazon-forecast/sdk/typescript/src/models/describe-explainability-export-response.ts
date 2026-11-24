import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataDestinationSchema, type DataDestination } from "./data-destination.js";

export type DescribeExplainabilityExportResponse = {
  /** The Amazon Resource Name (ARN) of the Explainability export. */
  explainabilityExportArn?: string;
  /** The name of the Explainability export. */
  explainabilityExportName?: string;
  /** The Amazon Resource Name (ARN) of the Explainability export. */
  explainabilityArn?: string;
  destination?: DataDestination;
  /** Information about any errors that occurred during the export. */
  message?: string;
  /**
   * The status of the Explainability export. States include: ACTIVE CREATE_PENDING,
   * CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING,
   * DELETE_IN_PROGRESS, DELETE_FAILED
   */
  status?: string;
  /** When the Explainability export was created. */
  creationTime?: Date;
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

export const describeExplainabilityExportResponseSchema: Schema<DescribeExplainabilityExportResponse> =
  s.object<DescribeExplainabilityExportResponse>(
    {
      explainabilityExportArn: s.optional(s.string()),
      explainabilityExportName: s.optional(s.string()),
      explainabilityArn: s.optional(s.string()),
      destination: s.optional(s.lazy(() => dataDestinationSchema)),
      message: s.optional(s.string()),
      status: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      format: s.optional(s.string()),
      _keysMap: {
        explainabilityExportArn: "ExplainabilityExportArn",
        explainabilityExportName: "ExplainabilityExportName",
        explainabilityArn: "ExplainabilityArn",
        destination: "Destination",
        message: "Message",
        status: "Status",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        format: "Format",
      },
    },
    { additionalProperties: s.json() },
  );
