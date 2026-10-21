import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The display name for the merchant account. */
export type DisplayName5 = string;

export const displayName5Schema: Schema<DisplayName5> = s.of<DisplayName5>(s.union([s.string()]));
