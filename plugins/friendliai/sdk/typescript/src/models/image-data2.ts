import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The image URL data. */
export type ImageData2 = {
  /** The URL of the image. */
  url: string;
};

export const imageData2Schema: Schema<ImageData2> = s.object<ImageData2>({
  url: s.string(),
});
