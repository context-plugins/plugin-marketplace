import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ImageGenerationContainerResult = {
  /** The base64-encoded image. */
  image: Uint8Array;
};

export const imageGenerationContainerResultSchema: Schema<ImageGenerationContainerResult> =
  s.object<ImageGenerationContainerResult>({
    image: s.bytes(),
  });
