import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaskedValue = string;

export const maskedValueSchema: Schema<MaskedValue> = s.of<MaskedValue>(s.union([s.string()]));
