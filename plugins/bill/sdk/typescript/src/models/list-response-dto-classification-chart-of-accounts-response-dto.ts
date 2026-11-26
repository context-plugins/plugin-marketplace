import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationChartOfAccountsResponseDtoSchema,
  type ClassificationChartOfAccountsResponseDto,
} from "./classification-chart-of-accounts-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoClassificationChartOfAccountsResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: ClassificationChartOfAccountsResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoClassificationChartOfAccountsResponseDtoSchema: Schema<ListResponseDtoClassificationChartOfAccountsResponseDto> =
  s.object<ListResponseDtoClassificationChartOfAccountsResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => classificationChartOfAccountsResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
