import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DetectedAt = string;

export const detectedAtSchema: Schema<DetectedAt> = s.of<DetectedAt>(s.union([s.string()]));
