import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** optional, for receipts */
export type Email = string;

export const emailSchema: Schema<Email> = s.of<Email>(s.union([s.string()]));
