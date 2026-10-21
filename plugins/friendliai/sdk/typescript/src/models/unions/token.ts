import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The token. */
export type Token = number;

export const tokenSchema: Schema<Token> = s.of<Token>(s.union([s.int()]));
