import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The display name for the payment service. */
export type DisplayName8 = string;

export const displayName8Schema: Schema<DisplayName8> = s.of<DisplayName8>(s.union([s.string()]));
