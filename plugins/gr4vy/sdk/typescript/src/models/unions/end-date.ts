import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Defines subscription expiration date. Must be provided in ISO 8601 format `(YYYY-MM-DD`). If not
 * provided, the subscription will not expire.
 */
export type EndDate = string;

export const endDateSchema: Schema<EndDate> = s.of<EndDate>(s.union([s.string()]));
