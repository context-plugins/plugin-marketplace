import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If this gift card redemption resulted in an error, this will contain the raw error message
 * received from the gift card provider.
 */
export type RawErrorMessage = string;

export const rawErrorMessageSchema: Schema<RawErrorMessage> = s.of<RawErrorMessage>(s.union([s.string()]));
