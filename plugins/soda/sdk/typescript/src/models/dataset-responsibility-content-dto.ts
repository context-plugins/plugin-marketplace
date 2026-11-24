import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetRoleContentDtoSchema, type DatasetRoleContentDto } from "./dataset-role-content-dto.js";
import { responsibilityTypeDtoSchema, type ResponsibilityTypeDto } from "./responsibility-type-dto.js";

export type DatasetResponsibilityContentDto = {
  managed: boolean;
  role: DatasetRoleContentDto;
  type: ResponsibilityTypeDto;
  userGroupId?: string;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetResponsibilityContentDtoSchema: Schema<DatasetResponsibilityContentDto> =
  s.object<DatasetResponsibilityContentDto>(
    {
      managed: s.boolean(),
      role: datasetRoleContentDtoSchema,
      type: responsibilityTypeDtoSchema,
      userGroupId: s.optional(s.string()),
      userId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
