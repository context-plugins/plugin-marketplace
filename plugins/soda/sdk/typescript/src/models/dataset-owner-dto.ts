import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetOwnerTypeDtoSchema, type DatasetOwnerTypeDto } from "./dataset-owner-type-dto.js";
import { userContentDtoSchema, type UserContentDto } from "./user-content-dto.js";
import {
  userGroupContentBasicDtoSchema,
  type UserGroupContentBasicDto,
} from "./user-group-content-basic-dto.js";

export type DatasetOwnerDto = {
  type: DatasetOwnerTypeDto;
  user?: UserContentDto;
  userGroup?: UserGroupContentBasicDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetOwnerDtoSchema: Schema<DatasetOwnerDto> = s.object<DatasetOwnerDto>(
  {
    type: datasetOwnerTypeDtoSchema,
    user: s.optional(s.lazy(() => userContentDtoSchema)),
    userGroup: s.optional(s.lazy(() => userGroupContentBasicDtoSchema)),
  },
  { additionalProperties: s.json() },
);
