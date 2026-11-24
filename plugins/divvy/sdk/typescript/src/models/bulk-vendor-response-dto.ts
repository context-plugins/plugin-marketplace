import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  vendorResponseDtoInternalSchema,
  vendorResponseDtoSchema,
  type VendorResponseDto,
} from "./vendor-response-dto.js";

/** Bulk vendor response. */
export type BulkVendorResponseDto = {
  /** List of vendors */
  vendors?: VendorResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkVendorResponseDtoProperties: s.Shape<BulkVendorResponseDto> = {
  vendors: s.optional(s.array(s.lazy(() => vendorResponseDtoInternalSchema))),
};

export const bulkVendorResponseDtoInternalSchema: Schema<BulkVendorResponseDto> =
  s.object<BulkVendorResponseDto>(bulkVendorResponseDtoProperties, { additionalProperties: s.json() });

export const bulkVendorResponseDtoSchema: Schema<BulkVendorResponseDto> = s.lazySchema(() =>
  s.object<BulkVendorResponseDto>(
    {
      ...bulkVendorResponseDtoProperties,
      vendors: s.optional(s.array(s.lazy(() => vendorResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
