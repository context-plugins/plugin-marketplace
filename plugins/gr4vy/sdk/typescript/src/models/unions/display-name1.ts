import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The display name for the buyer. */
export type DisplayName1 = string;

export const displayName1Schema: Schema<DisplayName1> = s.of<DisplayName1>(s.union([s.string()]));
