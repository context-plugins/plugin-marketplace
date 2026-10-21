import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The URL to redirect a user back to after the complete 3DS in browser. */
export type RedirectUrl = string;

export const redirectUrlSchema: Schema<RedirectUrl> = s.of<RedirectUrl>(s.union([s.string()]));
