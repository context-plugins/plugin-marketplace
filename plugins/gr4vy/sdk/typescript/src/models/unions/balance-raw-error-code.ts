import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If the last balance update failed, this will contain the the raw error code received from the
 * gift card provider.
 */
export type BalanceRawErrorCode = string;

export const balanceRawErrorCodeSchema: Schema<BalanceRawErrorCode> = s.of<BalanceRawErrorCode>(
  s.union([s.string()]),
);
