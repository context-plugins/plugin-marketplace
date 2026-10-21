import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageSchema, type Image } from "./unions/image.js";
import { model1Schema, type Model1 } from "./unions/model1.js";
import { responseFormat11Schema, type ResponseFormat11 } from "./unions/response-format11.js";
import { seed14Schema, type Seed14 } from "./unions/seed14.js";

export type ContainerImageEditBody = {
  /** The image(s) to edit. Must be in a supported image format. */
  image: Image;
  /** A text description of the desired image. */
  prompt: string;
  /** Routes the request to a specific adapter. */
  model?: Model1;
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
   * creative freedom. Defaults to 0. This parameter may be irrelevant for certain models, such as
   * `FLUX.Schnell`.
   *
   * @default 0
   */
  guidanceScale?: number;
  /** The seed to use for image generation. */
  seed?: Seed14;
  /** The format in which the generated image will be returned. One of `raw` and `jpeg`. */
  responseFormat?: ResponseFormat11;
};

export const containerImageEditBodySchema: Schema<ContainerImageEditBody> = s.object<ContainerImageEditBody>({
  image: imageSchema,
  prompt: s.string(),
  model: s.optional(s.lazy(() => model1Schema)),
  numInferenceSteps: s.defaulted(s.int(), 20),
  guidanceScale: s.defaulted(s.float64(), 0),
  seed: s.optional(s.lazy(() => seed14Schema)),
  responseFormat: s.optional(s.lazy(() => responseFormat11Schema)),
  _keysMap: {
    numInferenceSteps: "num_inference_steps",
    guidanceScale: "guidance_scale",
    responseFormat: "response_format",
  },
});
