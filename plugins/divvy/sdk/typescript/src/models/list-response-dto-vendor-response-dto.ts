import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  vendorResponseDtoInternalSchema,
  vendorResponseDtoSchema,
  type VendorResponseDto,
} from "./vendor-response-dto.js";

/** Response from a list API request with paging references. */
export type ListResponseDtoVendorResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: VendorResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listResponseDtoVendorResponseDtoProperties: s.Shape<ListResponseDtoVendorResponseDto> = {
  nextPage: s.optional(s.string()),
  prevPage: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => vendorResponseDtoInternalSchema))),
};

export const listResponseDtoVendorResponseDtoInternalSchema: Schema<ListResponseDtoVendorResponseDto> =
  s.object<ListResponseDtoVendorResponseDto>(listResponseDtoVendorResponseDtoProperties, {
    additionalProperties: s.json(),
  });

export const listResponseDtoVendorResponseDtoSchema: Schema<ListResponseDtoVendorResponseDto> = s.lazySchema(
  () =>
    s.object<ListResponseDtoVendorResponseDto>(
      {
        ...listResponseDtoVendorResponseDtoProperties,
        results: s.optional(s.array(s.lazy(() => vendorResponseDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
