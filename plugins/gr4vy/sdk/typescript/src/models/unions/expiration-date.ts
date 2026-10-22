import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The date and time when this gift card expires. This is a full date/time and may be more accurate
 * than the actual expiry date received by the gift card service.
 */
export type ExpirationDate = Date;

export const expirationDateSchema: Schema<ExpirationDate> = s.of<ExpirationDate>(s.union([s.dateTime()]));
