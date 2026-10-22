import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { imageInputSchema, type ImageInput } from "../image-input.js";

/**
 * Optional input images used to condition or guide the generation process (e.g., for ControlNet or
 * image editing models). This field is only applicable when using ControlNet or image editing
 * models.
 */
export type ControlImages = ImageInput[];

export const controlImagesSchema: Schema<ControlImages> = s.of<ControlImages>(
  s.union([s.array(s.lazy(() => imageInputSchema))]),
);
