import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentResponseDtoSchema, type AttachmentResponseDto } from "./attachment-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoAttachmentResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: AttachmentResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoAttachmentResponseDtoSchema: Schema<ListResponseDtoAttachmentResponseDto> =
  s.object<ListResponseDtoAttachmentResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => attachmentResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
