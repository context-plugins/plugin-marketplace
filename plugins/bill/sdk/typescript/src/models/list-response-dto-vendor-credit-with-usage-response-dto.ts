import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  vendorCreditWithUsageResponseDtoInternalSchema,
  vendorCreditWithUsageResponseDtoSchema,
  type VendorCreditWithUsageResponseDto,
} from "./vendor-credit-with-usage-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoVendorCreditWithUsageResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: VendorCreditWithUsageResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listResponseDtoVendorCreditWithUsageResponseDtoProperties: s.Shape<ListResponseDtoVendorCreditWithUsageResponseDto> =
  {
    nextPage: s.optional(s.string()),
    prevPage: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => vendorCreditWithUsageResponseDtoInternalSchema))),
  };

export const listResponseDtoVendorCreditWithUsageResponseDtoInternalSchema: Schema<ListResponseDtoVendorCreditWithUsageResponseDto> =
  s.object<ListResponseDtoVendorCreditWithUsageResponseDto>(
    listResponseDtoVendorCreditWithUsageResponseDtoProperties,
    { additionalProperties: s.json() },
  );

export const listResponseDtoVendorCreditWithUsageResponseDtoSchema: Schema<ListResponseDtoVendorCreditWithUsageResponseDto> =
  s.lazySchema(() =>
    s.object<ListResponseDtoVendorCreditWithUsageResponseDto>(
      {
        ...listResponseDtoVendorCreditWithUsageResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => vendorCreditWithUsageResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
