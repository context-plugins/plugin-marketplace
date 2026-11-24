import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Lifetime platform-wide inference-call count. Null for signed-out callers. */
export type InferenceCount = number;

export const inferenceCountSchema: Schema<InferenceCount> = s.of<InferenceCount>(s.union([s.int()]));
