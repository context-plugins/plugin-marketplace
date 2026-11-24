import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetRoleContentDtoSchema, type DatasetRoleContentDto } from "./dataset-role-content-dto.js";

export type PublicApiCreateDatasetRoleResponse = {
  datasetRole: DatasetRoleContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateDatasetRoleResponseSchema: Schema<PublicApiCreateDatasetRoleResponse> =
  s.object<PublicApiCreateDatasetRoleResponse>(
    {
      datasetRole: datasetRoleContentDtoSchema,
    },
    { additionalProperties: s.json() },
  );
