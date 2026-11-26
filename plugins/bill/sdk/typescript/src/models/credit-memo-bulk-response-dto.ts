import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditMemoResponseDtoSchema, type CreditMemoResponseDto } from "./credit-memo-response-dto.js";

/** Response Dto for bulk credit memo. */
export type CreditMemoBulkResponseDto = {
  /** List of credit memos */
  creditMemos?: CreditMemoResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditMemoBulkResponseDtoSchema: Schema<CreditMemoBulkResponseDto> =
  s.object<CreditMemoBulkResponseDto>(
    {
      creditMemos: s.optional(s.array(s.lazy(() => creditMemoResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
