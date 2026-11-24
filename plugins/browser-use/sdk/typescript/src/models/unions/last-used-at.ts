import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp when the profile was last used */
export type LastUsedAt = Date;

export const lastUsedAtSchema: Schema<LastUsedAt> = s.of<LastUsedAt>(s.union([s.dateTime()]));
