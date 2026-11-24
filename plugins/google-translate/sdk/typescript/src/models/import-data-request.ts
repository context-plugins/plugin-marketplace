import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetInputConfig2Schema, type DatasetInputConfig2 } from "./dataset-input-config2.js";

/** Request message for ImportData. */
export type ImportDataRequest = {
  /** Required. The config for the input content. */
  inputConfig?: DatasetInputConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importDataRequestSchema: Schema<ImportDataRequest> = s.object<ImportDataRequest>(
  {
    inputConfig: s.optional(s.lazy(() => datasetInputConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
