import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { giftCardErrorCodeSchema, type GiftCardErrorCode } from "../gift-card-error-code.js";

/** If the last balance update failed, this will contain the internal code for this error. */
export type BalanceErrorCode = GiftCardErrorCode;

export const balanceErrorCodeSchema: Schema<BalanceErrorCode> = s.of<BalanceErrorCode>(
  s.union([s.lazy(() => giftCardErrorCodeSchema)]),
);
