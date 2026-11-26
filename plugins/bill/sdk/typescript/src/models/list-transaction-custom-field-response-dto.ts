import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldDtoSchema, type CustomFieldDto } from "./custom-field-dto.js";

/** Transaction custom field response list. */
export type ListTransactionCustomFieldResponseDto = {
  /** Results */
  results?: CustomFieldDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTransactionCustomFieldResponseDtoSchema: Schema<ListTransactionCustomFieldResponseDto> =
  s.object<ListTransactionCustomFieldResponseDto>(
    {
      results: s.optional(s.array(s.lazy(() => customFieldDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
