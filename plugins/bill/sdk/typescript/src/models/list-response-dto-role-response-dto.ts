import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleResponseDtoSchema, type RoleResponseDto } from "./role-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoRoleResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: RoleResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoRoleResponseDtoSchema: Schema<ListResponseDtoRoleResponseDto> =
  s.object<ListResponseDtoRoleResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => roleResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
