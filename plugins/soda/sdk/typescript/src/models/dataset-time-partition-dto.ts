import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetPartitionColumnContentDtoSchema,
  type DatasetPartitionColumnContentDto,
} from "./dataset-partition-column-content-dto.js";
import {
  datasetTimePartitionTypeDtoSchema,
  type DatasetTimePartitionTypeDto,
} from "./dataset-time-partition-type-dto.js";

export type DatasetTimePartitionDto = {
  partitionColumn?: DatasetPartitionColumnContentDto;
  sqlExpression?: string;
  timePartitionType?: DatasetTimePartitionTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetTimePartitionDtoSchema: Schema<DatasetTimePartitionDto> =
  s.object<DatasetTimePartitionDto>(
    {
      partitionColumn: s.optional(s.lazy(() => datasetPartitionColumnContentDtoSchema)),
      sqlExpression: s.optional(s.string()),
      timePartitionType: s.optional(s.lazy(() => datasetTimePartitionTypeDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
