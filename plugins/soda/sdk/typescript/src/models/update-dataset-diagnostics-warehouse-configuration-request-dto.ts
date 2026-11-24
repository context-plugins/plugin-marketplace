import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetDiagnosticsWarehouseFailedRowsConfigurationRequestSchema,
  type DatasetDiagnosticsWarehouseFailedRowsConfigurationRequest,
} from "./dataset-diagnostics-warehouse-failed-rows-configuration-request.js";
import {
  datasetDiagnosticsWarehouseScanAndResultsConfigurationRequestSchema,
  type DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest,
} from "./dataset-diagnostics-warehouse-scan-and-results-configuration-request.js";

export type UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto = {
  failedRowsConfiguration?: DatasetDiagnosticsWarehouseFailedRowsConfigurationRequest;
  scanAndResultsConfiguration?: DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest;
  schema?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetDiagnosticsWarehouseConfigurationRequestDtoSchema: Schema<UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto> =
  s.object<UpdateDatasetDiagnosticsWarehouseConfigurationRequestDto>(
    {
      failedRowsConfiguration: s.optional(
        s.lazy(() => datasetDiagnosticsWarehouseFailedRowsConfigurationRequestSchema),
      ),
      scanAndResultsConfiguration: s.optional(
        s.lazy(() => datasetDiagnosticsWarehouseScanAndResultsConfigurationRequestSchema),
      ),
      schema: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
