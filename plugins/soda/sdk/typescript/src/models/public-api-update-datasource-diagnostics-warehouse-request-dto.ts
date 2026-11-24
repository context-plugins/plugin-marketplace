import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDtoSchema,
  type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto,
} from "./public-api-update-datasource-diagnostics-warehouse-request-dto-failed-rows-configuration-request-dto.js";
import {
  publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDtoSchema,
  type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto,
} from "./public-api-update-datasource-diagnostics-warehouse-request-dto-scan-and-results-configuration-request-dto.js";

export type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto = {
  configurationFileContents?: string;
  enabled?: boolean;
  failedRowsConfiguration?: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto;
  reuseDatasource?: boolean;
  scanAndResultsConfiguration?: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto;
  tableNameTemplate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoSchema: Schema<PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto> =
  s.object<PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto>(
    {
      configurationFileContents: s.optional(s.string()),
      enabled: s.optional(s.boolean()),
      failedRowsConfiguration: s.optional(
        s.lazy(() =>
          publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDtoSchema,
        ),
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
