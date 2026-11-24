import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ResetAt = string;

export const resetAtSchema: Schema<ResetAt> = s.of<ResetAt>(s.union([s.string()]));
