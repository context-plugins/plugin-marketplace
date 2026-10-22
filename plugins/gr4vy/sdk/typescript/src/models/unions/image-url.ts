import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The URL for the image of the item. */
export type ImageUrl = string;

export const imageUrlSchema: Schema<ImageUrl> = s.of<ImageUrl>(s.union([s.string()]));
