import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LifecycleStage = string;

export const lifecycleStageSchema: Schema<LifecycleStage> = s.of<LifecycleStage>(s.union([s.string()]));
