import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The Plaid account ID corresponding to the end-user account. If not provided will be fetched from
 * Plaid API expecting to only have one.
 */
export type AccountId = string;

export const accountIdSchema: Schema<AccountId> = s.of<AccountId>(s.union([s.string()]));
