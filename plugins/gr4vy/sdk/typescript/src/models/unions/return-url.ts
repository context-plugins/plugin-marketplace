import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The return URL after payment completion. */
export type ReturnUrl = string;

export const returnUrlSchema: Schema<ReturnUrl> = s.of<ReturnUrl>(s.union([s.string()]));
