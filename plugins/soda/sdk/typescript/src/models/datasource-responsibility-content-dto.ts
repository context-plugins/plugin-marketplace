import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasourceRoleContentDtoSchema,
  type DatasourceRoleContentDto,
} from "./datasource-role-content-dto.js";
import { responsibilityTypeDtoSchema, type ResponsibilityTypeDto } from "./responsibility-type-dto.js";

export type DatasourceResponsibilityContentDto = {
  managed: boolean;
  role: DatasourceRoleContentDto;
  type: ResponsibilityTypeDto;
  userGroupId?: string;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasourceResponsibilityContentDtoSchema: Schema<DatasourceResponsibilityContentDto> =
  s.object<DatasourceResponsibilityContentDto>(
    {
      managed: s.boolean(),
      role: datasourceRoleContentDtoSchema,
      type: responsibilityTypeDtoSchema,
      userGroupId: s.optional(s.string()),
      userId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
