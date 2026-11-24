import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasourceRoleContentDtoSchema,
  type DatasourceRoleContentDto,
} from "./datasource-role-content-dto.js";

export type PublicApiCreateDatasourceRoleResponse = {
  datasourceRole: DatasourceRoleContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateDatasourceRoleResponseSchema: Schema<PublicApiCreateDatasourceRoleResponse> =
  s.object<PublicApiCreateDatasourceRoleResponse>(
    {
      datasourceRole: datasourceRoleContentDtoSchema,
    },
    { additionalProperties: s.json() },
  );
