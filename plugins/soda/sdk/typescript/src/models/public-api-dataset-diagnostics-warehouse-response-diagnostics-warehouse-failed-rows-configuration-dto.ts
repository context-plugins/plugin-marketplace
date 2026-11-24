import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  diagnosticsWarehouseFailedRowsStorageStrategyDtoSchema,
  type DiagnosticsWarehouseFailedRowsStorageStrategyDto,
} from "./diagnostics-warehouse-failed-rows-storage-strategy-dto.js";
import { failedRowSamplesDtoSchema, type FailedRowSamplesDto } from "./failed-row-samples-dto.js";
import {
  failedRowsCollectionStrategyDtoSchema,
  type FailedRowsCollectionStrategyDto,
} from "./failed-rows-collection-strategy-dto.js";
import {
  failedRowsConfigurationStateDtoSchema,
  type FailedRowsConfigurationStateDto,
} from "./failed-rows-configuration-state-dto.js";

export type PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto = {
  enabled?: boolean;
  failedRowSamples?: FailedRowSamplesDto;
  failedRowsCollectionStrategy?: FailedRowsCollectionStrategyDto;
  maxRowCount?: number;
  state?: FailedRowsConfigurationStateDto;
  storageStrategy?: DiagnosticsWarehouseFailedRowsStorageStrategyDto;
  uniqueKeyColumnNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDtoSchema: Schema<PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto> =
  s.object<PublicApiDatasetDiagnosticsWarehouseResponseDiagnosticsWarehouseFailedRowsConfigurationDto>(
    {
      enabled: s.optional(s.boolean()),
      failedRowSamples: s.optional(s.lazy(() => failedRowSamplesDtoSchema)),
      failedRowsCollectionStrategy: s.optional(s.lazy(() => failedRowsCollectionStrategyDtoSchema)),
      maxRowCount: s.optional(s.int()),
      state: s.optional(s.lazy(() => failedRowsConfigurationStateDtoSchema)),
      storageStrategy: s.optional(s.lazy(() => diagnosticsWarehouseFailedRowsStorageStrategyDtoSchema)),
      uniqueKeyColumnNames: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
