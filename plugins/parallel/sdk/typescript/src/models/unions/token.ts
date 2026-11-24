import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Token = string;

export const tokenSchema: Schema<Token> = s.of<Token>(s.union([s.string()]));
