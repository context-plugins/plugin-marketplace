import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationUserResponseDtoSchema,
  type OrganizationUserResponseDto,
} from "./organization-user-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoOrganizationUserResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: OrganizationUserResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoOrganizationUserResponseDtoSchema: Schema<ListResponseDtoOrganizationUserResponseDto> =
  s.object<ListResponseDtoOrganizationUserResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => organizationUserResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
