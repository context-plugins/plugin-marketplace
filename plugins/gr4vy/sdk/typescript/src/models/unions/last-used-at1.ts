import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp when this gift card was last used in a transaction. */
export type LastUsedAt1 = Date;

export const lastUsedAt1Schema: Schema<LastUsedAt1> = s.of<LastUsedAt1>(s.union([s.dateTime()]));
