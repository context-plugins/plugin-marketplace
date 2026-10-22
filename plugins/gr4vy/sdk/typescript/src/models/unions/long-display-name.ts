import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Extended display name for the payment method */
export type LongDisplayName = string;

export const longDisplayNameSchema: Schema<LongDisplayName> = s.of<LongDisplayName>(s.union([s.string()]));
