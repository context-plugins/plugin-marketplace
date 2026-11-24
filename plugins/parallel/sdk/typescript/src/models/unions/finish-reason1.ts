import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { finishReasonSchema, type FinishReason } from "../finish-reason.js";

export type FinishReason1 = FinishReason;

export const finishReason1Schema: Schema<FinishReason1> = s.of<FinishReason1>(
  s.union([s.lazy(() => finishReasonSchema)]),
);
