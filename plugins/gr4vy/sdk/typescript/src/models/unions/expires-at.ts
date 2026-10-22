import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The expiration date and time for the payment link. */
export type ExpiresAt = Date;

export const expiresAtSchema: Schema<ExpiresAt> = s.of<ExpiresAt>(s.union([s.dateTime()]));
