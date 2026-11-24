import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasourceRoleContentDto = {
  createDatasets?: boolean;
  deleteDatasource?: boolean;
  id: string;
  manageDatasourceSettings?: boolean;
  managePermissions?: boolean;
  name: string;
  viewDatasource?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasourceRoleContentDtoSchema: Schema<DatasourceRoleContentDto> =
  s.object<DatasourceRoleContentDto>(
    {
      createDatasets: s.optional(s.boolean()),
      deleteDatasource: s.optional(s.boolean()),
      id: s.string(),
      manageDatasourceSettings: s.optional(s.boolean()),
      managePermissions: s.optional(s.boolean()),
      name: s.string(),
      viewDatasource: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
