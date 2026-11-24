import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  vendorResponseDtoInternalSchema,
  vendorResponseDtoSchema,
  type VendorResponseDto,
} from "./vendor-response-dto.js";

/** Get list of vendors response. */
export type ListVendorResponseDto = {
  nextPage?: string;
  prevPage?: string;
  results?: VendorResponseDto[];
  /** Total number of vendors matching the list request filters, across all pages of results. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listVendorResponseDtoProperties: s.Shape<ListVendorResponseDto> = {
  nextPage: s.optional(s.string()),
  prevPage: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => vendorResponseDtoInternalSchema))),
  count: s.optional(s.int()),
};

export const listVendorResponseDtoInternalSchema: Schema<ListVendorResponseDto> =
  s.object<ListVendorResponseDto>(listVendorResponseDtoProperties, { additionalProperties: s.json() });

export const listVendorResponseDtoSchema: Schema<ListVendorResponseDto> = s.lazySchema(() =>
  s.object<ListVendorResponseDto>(
    {
      ...listVendorResponseDtoProperties,
      results: s.optional(s.array(s.lazy(() => vendorResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
