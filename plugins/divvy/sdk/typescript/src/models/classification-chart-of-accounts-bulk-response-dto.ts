import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationChartOfAccountsResponseDtoSchema,
  type ClassificationChartOfAccountsResponseDto,
} from "./classification-chart-of-accounts-response-dto.js";

/** Response Dto for bulk classification chart of accounts. */
export type ClassificationChartOfAccountsBulkResponseDto = {
  /** List of chart of accounts */
  chartOfAccounts?: ClassificationChartOfAccountsResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationChartOfAccountsBulkResponseDtoSchema: Schema<ClassificationChartOfAccountsBulkResponseDto> =
  s.object<ClassificationChartOfAccountsBulkResponseDto>(
    {
      chartOfAccounts: s.optional(s.array(s.lazy(() => classificationChartOfAccountsResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
