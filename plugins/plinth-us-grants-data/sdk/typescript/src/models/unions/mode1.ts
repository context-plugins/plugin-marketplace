import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * text (default) | semantic. `semantic` matches on mission meaning rather than name, where the
 * embedding store is staged.
 */
export type Mode1 = string;

export const mode1Schema: Schema<Mode1> = s.of<Mode1>(s.union([s.string()]));
