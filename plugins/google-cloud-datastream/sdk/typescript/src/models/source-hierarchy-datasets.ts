import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetTemplate2Schema, type DatasetTemplate2 } from "./dataset-template2.js";

/**
 * Destination datasets are created so that hierarchy of the destination data objects matches the
 * source hierarchy.
 */
export type SourceHierarchyDatasets = {
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

export const sourceHierarchyDatasetsSchema: Schema<SourceHierarchyDatasets> =
  s.object<SourceHierarchyDatasets>(
    {
      projectId: s.optional(s.string()),
      datasetTemplate: s.optional(s.lazy(() => datasetTemplate2Schema)),
    },
    { additionalProperties: s.json() },
  );
