import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtractedImage = {
  label: string;
  side: string;
  imageId: string;
};

export const extractedImageSchema: Schema<ExtractedImage> = s.object<ExtractedImage>({
  label: s.string(),
  side: s.string(),
  imageId: s.string(),
  _keysMap: {
    imageId: "imageID",
  },
});
