import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embedded12Schema, type Embedded12 } from "./embedded12.js";

/**
 * Validation error returned when an update request cannot be applied. The specific problem is
 * described by the embedded error's `code`, `message`, and `path`. Common cases:
 * - no updateable field was provided (`Invalid` at `/`)
 * - bank fields were sent to a card funding source (`NotAllowed` at `/routingNumber`)
 * - card fields were sent to a bank funding source (`NotAllowed` at `/cardDetails`)
 * - a `cardDetails` value failed validation, such as `countryOfBirth` not being exactly 2
 *   characters
 */
export type UpdateFundingSourceValidationError = {
  code: string;
  message: string;
  embedded: Embedded12;
};

export const updateFundingSourceValidationErrorSchema: Schema<UpdateFundingSourceValidationError> =
  s.object<UpdateFundingSourceValidationError>({
    code: s.string(),
    message: s.string(),
    embedded: embedded12Schema,
    _keysMap: {
      embedded: "_embedded",
    },
  });
