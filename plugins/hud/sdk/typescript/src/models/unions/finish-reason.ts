import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FinishReason = string;

export const finishReasonSchema: Schema<FinishReason> = s.of<FinishReason>(s.union([s.string()]));
