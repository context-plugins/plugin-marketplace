import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `wallet.token` to the dLocal API for those connectors that need it. */
export type Token1 = string;

export const token1Schema: Schema<Token1> = s.of<Token1>(s.union([s.string()]));
