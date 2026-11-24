import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiDatasourceDiagnosticsWarehouseResponseFailedRowsConfigurationDtoSchema,
  type PublicApiDatasourceDiagnosticsWarehouseResponseFailedRowsConfigurationDto,
} from "./public-api-datasource-diagnostics-warehouse-response-failed-rows-configuration-dto.js";
import {
  publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDtoSchema,
  type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto,
} from "./public-api-update-datasource-diagnostics-warehouse-request-dto-scan-and-results-configuration-request-dto.js";

export type PublicApiDatasourceDiagnosticsWarehouseResponse = {
  enabled?: boolean;
  failedRowsConfiguration?: PublicApiDatasourceDiagnosticsWarehouseResponseFailedRowsConfigurationDto;
  reuseDatasource?: boolean;
  scanAndResultsConfiguration?: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto;
  tableNameTemplate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasourceDiagnosticsWarehouseResponseSchema: Schema<PublicApiDatasourceDiagnosticsWarehouseResponse> =
  s.object<PublicApiDatasourceDiagnosticsWarehouseResponse>(
    {
      enabled: s.optional(s.boolean()),
      failedRowsConfiguration: s.optional(
        s.lazy(() => publicApiDatasourceDiagnosticsWarehouseResponseFailedRowsConfigurationDtoSchema),
      ),
      reuseDatasource: s.optional(s.boolean()),
      scanAndResultsConfiguration: s.optional(
        s.lazy(() =>
          publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDtoSchema,
        ),
      ),
      tableNameTemplate: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
