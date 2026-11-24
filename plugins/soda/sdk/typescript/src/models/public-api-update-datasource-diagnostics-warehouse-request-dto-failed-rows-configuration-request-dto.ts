import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { failedRowSamplesDtoSchema, type FailedRowSamplesDto } from "./failed-row-samples-dto.js";
import {
  failedRowsCollectionStrategyDtoSchema,
  type FailedRowsCollectionStrategyDto,
} from "./failed-rows-collection-strategy-dto.js";
import {
  publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDtoSchema,
  type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDto,
} from "./public-api-update-datasource-diagnostics-warehouse-request-dto-action-button-request-dto.js";

export type PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto = {
  actionButton?: PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDto;
  enabled?: boolean;
  exposeQueries?: boolean;
  failedRowSamples?: FailedRowSamplesDto;
  failedRowsCollectionStrategy?: FailedRowsCollectionStrategyDto;
  locationMessage?: string;
  maxRowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDtoSchema: Schema<PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto> =
  s.object<PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoFailedRowsConfigurationRequestDto>(
    {
      actionButton: s.optional(
        s.lazy(() => publicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoActionButtonRequestDtoSchema),
      ),
      enabled: s.optional(s.boolean()),
      exposeQueries: s.optional(s.boolean()),
      failedRowSamples: s.optional(s.lazy(() => failedRowSamplesDtoSchema)),
      failedRowsCollectionStrategy: s.optional(s.lazy(() => failedRowsCollectionStrategyDtoSchema)),
      locationMessage: s.optional(s.string()),
      maxRowCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
