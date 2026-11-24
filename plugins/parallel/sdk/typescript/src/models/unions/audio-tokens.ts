import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AudioTokens = number;

export const audioTokensSchema: Schema<AudioTokens> = s.of<AudioTokens>(s.union([s.int()]));
