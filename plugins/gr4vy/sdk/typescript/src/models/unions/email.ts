import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `wallet.email` to the dLocal API for those connectors that need it. */
export type Email = string;

export const emailSchema: Schema<Email> = s.of<Email>(s.union([s.string()]));
