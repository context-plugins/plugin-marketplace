import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest = {
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetDiagnosticsWarehouseScanAndResultsConfigurationRequestSchema: Schema<DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest> =
  s.object<DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
