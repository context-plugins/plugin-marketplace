import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationResponseDtoInternalSchema,
  organizationResponseDtoSchema,
  type OrganizationResponseDto,
} from "./organization-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoOrganizationResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: OrganizationResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listResponseDtoOrganizationResponseDtoProperties: s.Shape<ListResponseDtoOrganizationResponseDto> = {
  nextPage: s.optional(s.string()),
  prevPage: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => organizationResponseDtoInternalSchema))),
};

export const listResponseDtoOrganizationResponseDtoInternalSchema: Schema<ListResponseDtoOrganizationResponseDto> =
  s.object<ListResponseDtoOrganizationResponseDto>(listResponseDtoOrganizationResponseDtoProperties, {
    additionalProperties: s.json(),
  });

export const listResponseDtoOrganizationResponseDtoSchema: Schema<ListResponseDtoOrganizationResponseDto> =
  s.lazySchema(() =>
    s.object<ListResponseDtoOrganizationResponseDto>(
      {
        ...listResponseDtoOrganizationResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => organizationResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
