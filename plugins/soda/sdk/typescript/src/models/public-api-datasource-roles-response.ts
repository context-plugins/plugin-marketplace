import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasourceRoleContentDtoSchema,
  type DatasourceRoleContentDto,
} from "./datasource-role-content-dto.js";

export type PublicApiDatasourceRolesResponse = {
  content: DatasourceRoleContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasourceRolesResponseSchema: Schema<PublicApiDatasourceRolesResponse> =
  s.object<PublicApiDatasourceRolesResponse>(
    {
      content: s.array(s.lazy(() => datasourceRoleContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
