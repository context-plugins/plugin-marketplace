import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetDiagnosticsWarehouseScanAndResultsConfigurationRequestSchema,
  type DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest,
} from "./dataset-diagnostics-warehouse-scan-and-results-configuration-request.js";
import {
  publicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDtoSchema,
  type PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto,
} from "./public-api-dataset-diagnostics-warehouse-response-diagnostics-warehouse-failed-rows-configuration-dto.js";

export type PublicApiDatasetDiagnosticsWarehouseResponse = {
  failedRowsConfiguration?: PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto;
  scanAndResultsConfiguration?: DatasetDiagnosticsWarehouseScanAndResultsConfigurationRequest;
  schema?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetDiagnosticsWarehouseResponseSchema: Schema<PublicApiDatasetDiagnosticsWarehouseResponse> =
  s.object<PublicApiDatasetDiagnosticsWarehouseResponse>(
    {
      failedRowsConfiguration: s.optional(
        s.lazy(() =>
          publicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDtoSchema,
        ),
      ),
      scanAndResultsConfiguration: s.optional(
        s.lazy(() => datasetDiagnosticsWarehouseScanAndResultsConfigurationRequestSchema),
      ),
      schema: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
