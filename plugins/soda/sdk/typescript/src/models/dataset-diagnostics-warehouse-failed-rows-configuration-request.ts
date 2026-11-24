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

export type DatasetDiagnosticsWarehouseFailedRowsConfigurationRequest = {
  enabled?: boolean;
  failedRowSamples?: FailedRowSamplesDto;
  failedRowsCollectionStrategy?: FailedRowsCollectionStrategyDto;
  maxRowCount?: number;
  /**
   * @deprecated
   */
  schema?: string;
  storageStrategy?: DiagnosticsWarehouseFailedRowsStorageStrategyDto;
  uniqueKeyColumnNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetDiagnosticsWarehouseFailedRowsConfigurationRequestSchema: Schema<DatasetDiagnosticsWarehouseFailedRowsConfigurationRequest> =
  s.object<DatasetDiagnosticsWarehouseFailedRowsConfigurationRequest>(
    {
      enabled: s.optional(s.boolean()),
      failedRowSamples: s.optional(s.lazy(() => failedRowSamplesDtoSchema)),
      failedRowsCollectionStrategy: s.optional(s.lazy(() => failedRowsCollectionStrategyDtoSchema)),
      maxRowCount: s.optional(s.int()),
      schema: s.optional(s.string()),
      storageStrategy: s.optional(s.lazy(() => diagnosticsWarehouseFailedRowsStorageStrategyDtoSchema)),
      uniqueKeyColumnNames: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
