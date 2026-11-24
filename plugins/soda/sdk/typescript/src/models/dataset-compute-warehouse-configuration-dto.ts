import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema,
  type UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto,
} from "./update-dataset-compute-warehouse-override-configuration-request-dto-warehouse-configuration-dto.js";

export type DatasetComputeWarehouseConfigurationDto = {
  availableWarehouses?: UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto[];
  currentWarehouse?: UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto;
  datasetWarehouseOverride?: UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto;
  defaultWarehouse?: UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetComputeWarehouseConfigurationDtoSchema: Schema<DatasetComputeWarehouseConfigurationDto> =
  s.object<DatasetComputeWarehouseConfigurationDto>(
    {
      availableWarehouses: s.optional(
        s.array(
          s.lazy(() =>
            updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema,
          ),
        ),
      ),
      currentWarehouse: s.optional(
        s.lazy(() =>
          updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema,
        ),
      ),
      datasetWarehouseOverride: s.optional(
        s.lazy(() =>
          updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema,
        ),
      ),
      defaultWarehouse: s.optional(
        s.lazy(() =>
          updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema,
        ),
      ),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
