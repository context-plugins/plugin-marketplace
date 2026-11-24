import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema,
  type UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto,
} from "./update-dataset-compute-warehouse-override-configuration-request-dto-warehouse-configuration-dto.js";

export type UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto = {
  computeWarehouseConfiguration?: UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetComputeWarehouseOverrideConfigurationRequestDtoSchema: Schema<UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto> =
  s.object<UpdateDatasetComputeWarehouseOverrideConfigurationRequestDto>(
    {
      computeWarehouseConfiguration: s.optional(
        s.lazy(() =>
          updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema,
        ),
      ),
      enabled: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
