import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The timestamp when this gift card was last used in a transaction for client initiated
 * transactions.
 */
export type CitLastUsedAt = Date;

export const citLastUsedAtSchema: Schema<CitLastUsedAt> = s.of<CitLastUsedAt>(s.union([s.dateTime()]));
