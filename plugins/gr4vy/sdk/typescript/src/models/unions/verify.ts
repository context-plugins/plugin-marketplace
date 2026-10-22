import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `wallet.verify` to the dLocal API for those connectors that need it. */
export type Verify = boolean;

export const verifySchema: Schema<Verify> = s.of<Verify>(s.union([s.boolean()]));
