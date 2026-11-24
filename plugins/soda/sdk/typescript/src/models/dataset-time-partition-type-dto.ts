import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DatasetTimePartitionTypeDto = {
  Disabled: "disabled",
  PartitionColumn: "partitionColumn",
  SqlExpression: "sqlExpression",
} as const;
export type DatasetTimePartitionTypeDto =
  | (typeof DatasetTimePartitionTypeDto)[keyof typeof DatasetTimePartitionTypeDto]
  | (string & {});

export const datasetTimePartitionTypeDtoSchema: EnumSchema<DatasetTimePartitionTypeDto> =
  s.enumOf<DatasetTimePartitionTypeDto>(DatasetTimePartitionTypeDto);
