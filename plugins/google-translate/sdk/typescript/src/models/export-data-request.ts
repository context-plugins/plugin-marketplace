import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetOutputConfig1Schema, type DatasetOutputConfig1 } from "./dataset-output-config1.js";

/** Request message for ExportData. */
export type ExportDataRequest = {
  /** Required. The config for the output content. */
  outputConfig?: DatasetOutputConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exportDataRequestSchema: Schema<ExportDataRequest> = s.object<ExportDataRequest>(
  {
    outputConfig: s.optional(s.lazy(() => datasetOutputConfig1Schema)),
  },
  { additionalProperties: s.json() },
);
