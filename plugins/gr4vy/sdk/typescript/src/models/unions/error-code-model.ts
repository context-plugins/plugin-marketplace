import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { giftCardErrorCodeSchema, type GiftCardErrorCode } from "../gift-card-error-code.js";

/**
 * If this gift card redemption resulted in an error, this will contain the internal code for the
 * error.
 */
export type ErrorCodeModel = GiftCardErrorCode;

export const errorCodeModelSchema: Schema<ErrorCodeModel> = s.of<ErrorCodeModel>(
  s.union([s.lazy(() => giftCardErrorCodeSchema)]),
);
