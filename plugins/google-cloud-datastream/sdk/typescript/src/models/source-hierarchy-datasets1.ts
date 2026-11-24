import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetTemplate2Schema, type DatasetTemplate2 } from "./dataset-template2.js";

/** Source hierarchy datasets. */
export type SourceHierarchyDatasets1 = {
  /**
   * Optional. The project id of the BigQuery dataset. If not specified, the project will be
   * inferred from the stream resource.
   */
  projectId?: string;
  /** The dataset template to use for dynamic dataset creation. */
  datasetTemplate?: DatasetTemplate2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceHierarchyDatasets1Schema: Schema<SourceHierarchyDatasets1> =
  s.object<SourceHierarchyDatasets1>(
    {
      projectId: s.optional(s.string()),
      datasetTemplate: s.optional(s.lazy(() => datasetTemplate2Schema)),
    },
    { additionalProperties: s.json() },
  );
