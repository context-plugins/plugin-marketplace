import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetRoleContentDtoSchema, type DatasetRoleContentDto } from "./dataset-role-content-dto.js";

export type PublicApiDatasetRolesResponse = {
  content: DatasetRoleContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetRolesResponseSchema: Schema<PublicApiDatasetRolesResponse> =
  s.object<PublicApiDatasetRolesResponse>(
    {
      content: s.array(s.lazy(() => datasetRoleContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
