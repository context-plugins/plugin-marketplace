import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The date and time when this API key pair was last used to authenticate, or `null` if it has never
 * been used.
 */
export type LastUsedAt = Date;

export const lastUsedAtSchema: Schema<LastUsedAt> = s.of<LastUsedAt>(s.union([s.dateTime()]));
