import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto = {
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDtoSchema: Schema<UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto> =
  s.object<UpdateDatasetComputeWarehouseOverrideConfigurationRequestDtoWarehouseConfigurationDto>(
    {
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
