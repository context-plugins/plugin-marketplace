import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Minimum payer enrollment limit, not minimum recurring charge amount. */
export type MinValue = string;

export const minValueSchema: Schema<MinValue> = s.of<MinValue>(s.union([s.string()]));
