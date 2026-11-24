import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vendorCreditResponseDtoSchema, type VendorCreditResponseDto } from "./vendor-credit-response-dto.js";

/** Response Dto for bulk vendor credit. */
export type VendorCreditBulkResponseDto = {
  /** List of vendor credits */
  vendorCredits?: VendorCreditResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vendorCreditBulkResponseDtoSchema: Schema<VendorCreditBulkResponseDto> =
  s.object<VendorCreditBulkResponseDto>(
    {
      vendorCredits: s.optional(s.array(s.lazy(() => vendorCreditResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
