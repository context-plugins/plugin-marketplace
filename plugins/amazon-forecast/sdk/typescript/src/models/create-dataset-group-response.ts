import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateDatasetGroupResponse = {
  /** The Amazon Resource Name (ARN) of the dataset group. */
  datasetGroupArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createDatasetGroupResponseSchema: Schema<CreateDatasetGroupResponse> =
  s.object<CreateDatasetGroupResponse>(
    {
      datasetGroupArn: s.optional(s.string()),
      _keysMap: {
        datasetGroupArn: "DatasetGroupArn",
      },
    },
    { additionalProperties: s.json() },
  );
