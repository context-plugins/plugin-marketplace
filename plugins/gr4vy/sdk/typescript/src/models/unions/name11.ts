import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `wallet.name` to the dLocal API for those connectors that need it. */
export type Name11 = string;

export const name11Schema: Schema<Name11> = s.of<Name11>(s.union([s.string()]));
