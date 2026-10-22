import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If the last balance update failed, this will contain the the raw error message received from the
 * gift card provider.
 */
export type BalanceRawErrorMessage = string;

export const balanceRawErrorMessageSchema: Schema<BalanceRawErrorMessage> = s.of<BalanceRawErrorMessage>(
  s.union([s.string()]),
);
