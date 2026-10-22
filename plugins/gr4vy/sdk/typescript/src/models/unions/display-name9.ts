import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The display name of the connection used for this payout. */
export type DisplayName9 = string;

export const displayName9Schema: Schema<DisplayName9> = s.of<DisplayName9>(s.union([s.string()]));
