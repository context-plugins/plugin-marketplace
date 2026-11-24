import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetGroupSummary = {
  /** The Amazon Resource Name (ARN) of the dataset group. */
  datasetGroupArn?: string;
  /** The name of the dataset group. */
  datasetGroupName?: string;
  /** When the dataset group was created. */
  creationTime?: Date;
  /**
   * When the dataset group was created or last updated from a call to the UpdateDatasetGroup
   * operation. While the dataset group is being updated, LastModificationTime is the current time
   * of the ListDatasetGroups call.
   */
  lastModificationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetGroupSummarySchema: Schema<DatasetGroupSummary> = s.object<DatasetGroupSummary>(
  {
    datasetGroupArn: s.optional(s.string()),
    datasetGroupName: s.optional(s.string()),
    creationTime: s.optional(s.dateTime()),
    lastModificationTime: s.optional(s.dateTime()),
    _keysMap: {
      datasetGroupArn: "DatasetGroupArn",
      datasetGroupName: "DatasetGroupName",
      creationTime: "CreationTime",
      lastModificationTime: "LastModificationTime",
    },
  },
  { additionalProperties: s.json() },
);
