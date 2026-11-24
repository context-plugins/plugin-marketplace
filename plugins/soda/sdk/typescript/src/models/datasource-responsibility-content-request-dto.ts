import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responsibilityTypeDtoSchema, type ResponsibilityTypeDto } from "./responsibility-type-dto.js";

export type DatasourceResponsibilityContentRequestDto = {
  roleId: string;
  type: ResponsibilityTypeDto;
  userGroupId?: string;
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasourceResponsibilityContentRequestDtoSchema: Schema<DatasourceResponsibilityContentRequestDto> =
  s.object<DatasourceResponsibilityContentRequestDto>(
    {
      roleId: s.string(),
      type: responsibilityTypeDtoSchema,
      userGroupId: s.optional(s.string()),
      userId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
