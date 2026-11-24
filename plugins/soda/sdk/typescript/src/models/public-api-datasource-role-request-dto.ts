import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDatasourceRoleRequestDto = {
  createDatasets?: boolean;
  deleteDatasource?: boolean;
  manageDatasourceSettings?: boolean;
  managePermissions?: boolean;
  name: string;
  viewDatasource?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasourceRoleRequestDtoSchema: Schema<PublicApiDatasourceRoleRequestDto> =
  s.object<PublicApiDatasourceRoleRequestDto>(
    {
      createDatasets: s.optional(s.boolean()),
      deleteDatasource: s.optional(s.boolean()),
      manageDatasourceSettings: s.optional(s.boolean()),
      managePermissions: s.optional(s.boolean()),
      name: s.string(),
      viewDatasource: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
