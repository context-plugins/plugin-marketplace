import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetResponsibilityContentRequestDtoSchema,
  type DatasetResponsibilityContentRequestDto,
} from "./dataset-responsibility-content-request-dto.js";

export type PublicApiUpdateDatasetResponsibilitiesRequestDto = {
  responsibilities: DatasetResponsibilityContentRequestDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateDatasetResponsibilitiesRequestDtoSchema: Schema<PublicApiUpdateDatasetResponsibilitiesRequestDto> =
  s.object<PublicApiUpdateDatasetResponsibilitiesRequestDto>(
    {
      responsibilities: s.array(s.lazy(() => datasetResponsibilityContentRequestDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
