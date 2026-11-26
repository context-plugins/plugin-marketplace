import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationBankAccountResponseDtoSchema,
  type OrganizationBankAccountResponseDto,
} from "./organization-bank-account-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoOrganizationBankAccountResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: OrganizationBankAccountResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listResponseDtoOrganizationBankAccountResponseDtoSchema: Schema<ListResponseDtoOrganizationBankAccountResponseDto> =
  s.object<ListResponseDtoOrganizationBankAccountResponseDto>(
    {
      nextPage: s.optional(s.string()),
      prevPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => organizationBankAccountResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
