import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImageData = {
  /** The URL of the image. */
  url: string;
};

export const imageDataSchema: Schema<ImageData> = s.object<ImageData>({
  url: s.string(),
});
