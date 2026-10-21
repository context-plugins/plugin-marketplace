import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The token value. Will be present if succeeded. */
export type Token3 = string;

export const token3Schema: Schema<Token3> = s.of<Token3>(s.union([s.string()]));
