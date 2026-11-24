import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentResponseDtoSchema, type DocumentResponseDto } from "./document-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoDocumentResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: DocumentResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoDocumentResponseDtoSchema: Schema<ListResponseDtoDocumentResponseDto> =
  s.object<ListResponseDtoDocumentResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => documentResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
