import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateDatasetTimePartitionRequestDto = {
  partitionColumn?: string;
  sqlExpression?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateDatasetTimePartitionRequestDtoSchema: Schema<UpdateDatasetTimePartitionRequestDto> =
  s.object<UpdateDatasetTimePartitionRequestDto>(
    {
      partitionColumn: s.optional(s.string()),
      sqlExpression: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
