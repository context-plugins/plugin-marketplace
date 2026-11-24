import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetType1Schema, type DatasetType1 } from "./dataset-type1.js";
import { statusSchema, type Status } from "./status.js";

export type DatasetFilter = {
  /** Filter the datasets based on the dataset status. */
  status?: Status;
  /** Filter the datasets based on the dataset type. */
  datasetType?: DatasetType1;
  /** Filter the datasets to include datasets created after the specified time. */
  creationTimeAfter?: Date;
  /** Filter the datasets to include datasets created before the specified time. */
  creationTimeBefore?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetFilterSchema: Schema<DatasetFilter> = s.object<DatasetFilter>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    datasetType: s.optional(s.lazy(() => datasetType1Schema)),
    creationTimeAfter: s.optional(s.dateTime()),
    creationTimeBefore: s.optional(s.dateTime()),
    _keysMap: {
      status: "Status",
      datasetType: "DatasetType",
      creationTimeAfter: "CreationTimeAfter",
      creationTimeBefore: "CreationTimeBefore",
    },
  },
  { additionalProperties: s.json() },
);
