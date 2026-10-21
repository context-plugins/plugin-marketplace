import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImageInput = {
  /**
   * An input image, provided either as a URL or a base64-encoded string. Maximum supported image
   * size is 50 MiB.
   */
  image: string;
};

export const imageInputSchema: Schema<ImageInput> = s.object<ImageInput>({
  image: s.string(),
});
