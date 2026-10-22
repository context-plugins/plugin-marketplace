import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { guidanceScaleSchema, type GuidanceScale } from "./unions/guidance-scale.js";
import { imageSchema, type Image } from "./unions/image.js";
import { responseFormat31Schema, type ResponseFormat31 } from "./unions/response-format31.js";
import { seed14Schema, type Seed14 } from "./unions/seed14.js";

export type DedicatedImageEditBody = {
  /** The image(s) to edit. Must be in a supported image format. */
  image: Image;
  /** A text description of the desired image(s). */
  prompt: string;
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /**
   * The number of inference steps to use during image generation. Defaults to 20. Supported range:
   * [1, 50].
   *
   * @default 20
   */
  numInferenceSteps?: number;
  /**
   * Adjusts the alignment of the generated image with the input prompt. Higher values (e.g., 8-10)
   * make the output more faithful to the prompt, while lower values (e.g., 1-5) encourage more
   * creative freedom. This parameter may be irrelevant for certain models, such as `FLUX.Schnell`.
   */
  guidanceScale?: GuidanceScale;
  /** The seed to use for image generation. */
  seed?: Seed14;
  /**
   * The format in which the generated image(s) will be returned. One of `url(default)`, `raw`,
   * `png`, `jpeg`, and `jpg`.
   */
  responseFormat?: ResponseFormat31;
};

export const dedicatedImageEditBodySchema: Schema<DedicatedImageEditBody> = s.object<DedicatedImageEditBody>({
  image: imageSchema,
  prompt: s.string(),
  model: s.string(),
  numInferenceSteps: s.defaulted(s.int(), 20),
  guidanceScale: s.optional(s.lazy(() => guidanceScaleSchema)),
  seed: s.optional(s.lazy(() => seed14Schema)),
  responseFormat: s.optional(s.lazy(() => responseFormat31Schema)),
  _keysMap: {
    numInferenceSteps: "num_inference_steps",
    guidanceScale: "guidance_scale",
    responseFormat: "response_format",
  },
});
