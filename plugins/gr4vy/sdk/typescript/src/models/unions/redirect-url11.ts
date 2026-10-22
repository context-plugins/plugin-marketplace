import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The URL to redirect a user back to after they approve the transaction in the browser. */
export type RedirectUrl11 = string;

export const redirectUrl11Schema: Schema<RedirectUrl11> = s.of<RedirectUrl11>(s.union([s.string()]));
