import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalPromptTokens = number;

export const totalPromptTokensSchema: Schema<TotalPromptTokens> = s.of<TotalPromptTokens>(s.union([s.int()]));
