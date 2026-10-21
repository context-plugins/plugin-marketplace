import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `wallet.username` to the dLocal API for those connectors that need it. */
export type Username = string;

export const usernameSchema: Schema<Username> = s.of<Username>(s.union([s.string()]));
