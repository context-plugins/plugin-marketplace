import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnTypeDtoSchema, type ColumnTypeDto } from "./column-type-dto.js";

export type DatasetPartitionColumnContentDto = {
  columnType: ColumnTypeDto;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetPartitionColumnContentDtoSchema: Schema<DatasetPartitionColumnContentDto> =
  s.object<DatasetPartitionColumnContentDto>(
    {
      columnType: columnTypeDtoSchema,
      name: s.string(),
    },
    { additionalProperties: s.json() },
  );
