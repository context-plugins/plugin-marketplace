import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If this gift card redemption resulted in an error, this will contain the raw error code received
 * from the gift card provider.
 */
export type RawErrorCode = string;

export const rawErrorCodeSchema: Schema<RawErrorCode> = s.of<RawErrorCode>(s.union([s.string()]));
