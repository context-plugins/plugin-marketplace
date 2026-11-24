import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetOwnerTypeDtoSchema, type DatasetOwnerTypeDto } from "./dataset-owner-type-dto.js";

export type DataStandardOwnerRequestDto = {
  type: DatasetOwnerTypeDto;
  userGroupId?: string;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataStandardOwnerRequestDtoSchema: Schema<DataStandardOwnerRequestDto> =
  s.object<DataStandardOwnerRequestDto>(
    {
      type: datasetOwnerTypeDtoSchema,
      userGroupId: s.optional(s.string()),
      userId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
