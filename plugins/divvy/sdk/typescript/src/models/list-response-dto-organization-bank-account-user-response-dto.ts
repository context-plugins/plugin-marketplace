import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationBankAccountUserResponseDtoSchema,
  type OrganizationBankAccountUserResponseDto,
} from "./organization-bank-account-user-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoOrganizationBankAccountUserResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: OrganizationBankAccountUserResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoOrganizationBankAccountUserResponseDtoSchema: Schema<ListResponseDtoOrganizationBankAccountUserResponseDto> =
  s.object<ListResponseDtoOrganizationBankAccountUserResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => organizationBankAccountUserResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
