import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingPurposeSchema, type FundingPurpose } from "./funding-purpose.js";

/** Card funding purposes dto. */
export type ListCardFundingPurposesResponseDto = {
  /**
   * Last used purpose. This value was last used as the `cardFundingPurpose` value in a payment
   * request.
   *
   * **Note**: This field is available only for the AMEX, VISA, and MASTERCARD card brands.
   */
  lastUsedPurpose?: string;
  /**
   * List of card funding purpose values based on the vendor and card brand. Use a `subCategories`
   * value for an AMEX, VISA, or MASTERCARD card brand. Use a `category` value for all other card
   * brands.
   */
  results?: FundingPurpose[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCardFundingPurposesResponseDtoSchema: Schema<ListCardFundingPurposesResponseDto> =
  s.object<ListCardFundingPurposesResponseDto>(
    {
      lastUsedPurpose: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => fundingPurposeSchema))),
    },
    { additionalProperties: s.json() },
  );
