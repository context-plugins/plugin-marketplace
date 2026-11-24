import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetChangesSchema, type DatasetChanges } from "./dataset-changes.js";

export type UpdateDatasetEntriesRequest = {
  /** The Amazon Resource Name (ARN) of the dataset that you want to update. */
  datasetArn: string;
  changes: DatasetChanges;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetEntriesRequestSchema: Schema<UpdateDatasetEntriesRequest> =
  s.object<UpdateDatasetEntriesRequest>(
    {
      datasetArn: s.string(),
      changes: datasetChangesSchema,
      _keysMap: {
        datasetArn: "DatasetArn",
        changes: "Changes",
      },
    },
    { additionalProperties: s.json() },
  );
