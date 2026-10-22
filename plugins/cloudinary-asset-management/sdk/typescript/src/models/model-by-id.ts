import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./id.js";

/** Pin an exact model by ID, bypassing family/tier. */
export type ModelById = {
  /**
   * Exact model identifier; overrides family/tier when provided. The `-edit` models accept
   * reference images and are selectable only on `image_to_image`; the others only on
   * `text_to_image`.
   */
  id: Id;
};

export const modelByIdSchema: Schema<ModelById> = s.object<ModelById>({
  id: idSchema,
});
