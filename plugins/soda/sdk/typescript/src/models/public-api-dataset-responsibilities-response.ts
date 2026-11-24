import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  datasetResponsibilityContentDtoSchema,
  type DatasetResponsibilityContentDto,
} from "./dataset-responsibility-content-dto.js";

export type PublicApiDatasetResponsibilitiesResponse = {
  content: DatasetResponsibilityContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDatasetResponsibilitiesResponseSchema: Schema<PublicApiDatasetResponsibilitiesResponse> =
  s.object<PublicApiDatasetResponsibilitiesResponse>(
    {
      content: s.array(s.lazy(() => datasetResponsibilityContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
