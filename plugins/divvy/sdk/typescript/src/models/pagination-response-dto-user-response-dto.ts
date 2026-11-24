import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userResponseDtoSchema, type UserResponseDto } from "./user-response-dto.js";

/** Response from a list API request with paging references. */
export type PaginationResponseDtoUserResponseDto = {
  /** Next page token */
  nextPage?: string;
  /** Previous page token */
  prevPage?: string;
  /** Results */
  results?: UserResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseDtoUserResponseDtoSchema: Schema<PaginationResponseDtoUserResponseDto> =
  s.object<PaginationResponseDtoUserResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => userResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
