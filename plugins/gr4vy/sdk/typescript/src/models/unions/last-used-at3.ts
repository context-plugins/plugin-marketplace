import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp when this payment method was last used in a transaction. */
export type LastUsedAt3 = Date;

export const lastUsedAt3Schema: Schema<LastUsedAt3> = s.of<LastUsedAt3>(s.union([s.dateTime()]));
