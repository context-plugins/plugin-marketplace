import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto = {
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDtoSchema: Schema<PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto> =
  s.object<PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoScanAndResultsConfigurationRequestDto>(
    {
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
