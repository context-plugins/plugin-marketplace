import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { imageInputSchema, type ImageInput } from "../image-input.js";

/** The image(s) to edit. Must be in a supported image format. */
export type Image = ImageInput | ImageInput[];

export const imageSchema: Schema<Image> = s.of<Image>(
  s.union([s.lazy(() => imageInputSchema), s.array(s.lazy(() => imageInputSchema))]),
);
