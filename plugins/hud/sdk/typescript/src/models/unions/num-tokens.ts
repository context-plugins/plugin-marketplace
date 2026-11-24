import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NumTokens = number;

export const numTokensSchema: Schema<NumTokens> = s.of<NumTokens>(s.union([s.int()]));
