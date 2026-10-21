import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Adjusts the alignment of the generated image with the input prompt. Higher values (e.g., 8-10)
 * make the output more faithful to the prompt, while lower values (e.g., 1-5) encourage more
 * creative freedom. This parameter may be irrelevant for certain models, such as `FLUX.Schnell`.
 */
export type GuidanceScale = number;

export const guidanceScaleSchema: Schema<GuidanceScale> = s.of<GuidanceScale>(s.union([s.float64()]));
