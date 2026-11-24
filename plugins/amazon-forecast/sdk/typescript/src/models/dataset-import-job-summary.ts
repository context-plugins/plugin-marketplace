import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSourceSchema, type DataSource } from "./data-source.js";
import { importMode1Schema, type ImportMode1 } from "./import-mode1.js";

export type DatasetImportJobSummary = {
  /** The Amazon Resource Name (ARN) of the dataset import job. */
  datasetImportJobArn?: string;
  /** The name of the dataset import job. */
  datasetImportJobName?: string;
  dataSource?: DataSource;
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
  /** The import mode of the dataset import job, FULL or INCREMENTAL. */
  importMode?: ImportMode1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetImportJobSummarySchema: Schema<DatasetImportJobSummary> =
  s.object<DatasetImportJobSummary>(
    {
      datasetImportJobArn: s.optional(s.string()),
      datasetImportJobName: s.optional(s.string()),
      dataSource: s.optional(s.lazy(() => dataSourceSchema)),
      status: s.optional(s.string()),
      message: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      lastModificationTime: s.optional(s.dateTime()),
      importMode: s.optional(s.lazy(() => importMode1Schema)),
      _keysMap: {
        datasetImportJobArn: "DatasetImportJobArn",
        datasetImportJobName: "DatasetImportJobName",
        dataSource: "DataSource",
        status: "Status",
        message: "Message",
        creationTime: "CreationTime",
        lastModificationTime: "LastModificationTime",
        importMode: "ImportMode",
      },
    },
    { additionalProperties: s.json() },
  );
