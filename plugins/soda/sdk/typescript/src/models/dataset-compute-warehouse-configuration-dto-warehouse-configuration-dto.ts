import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetComputeWarehouseConfigurationDtoWarehouseConfigurationDto = {
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetComputeWarehouseConfigurationDtoWarehouseConfigurationDtoSchema: Schema<DatasetComputeWarehouseConfigurationDtoWarehouseConfigurationDto> =
  s.object<DatasetComputeWarehouseConfigurationDtoWarehouseConfigurationDto>(
    {
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
