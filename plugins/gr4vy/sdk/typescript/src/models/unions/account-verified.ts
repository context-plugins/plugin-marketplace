import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if an account was verified. */
export type AccountVerified = boolean;

export const accountVerifiedSchema: Schema<AccountVerified> = s.of<AccountVerified>(s.union([s.boolean()]));
