import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { controlImagesSchema, type ControlImages } from "./unions/control-images.js";
import { controlnetWeightsSchema, type ControlnetWeights } from "./unions/controlnet-weights.js";
import { model1Schema, type Model1 } from "./unions/model1.js";
import { responseFormat11Schema, type ResponseFormat11 } from "./unions/response-format11.js";
import { seed14Schema, type Seed14 } from "./unions/seed14.js";

export type ContainerImageGenerationBody = {
  /** Routes the request to a specific adapter. */
  model?: Model1;
  /** A text description of the desired image. */
  prompt: string;
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
  /**
   * Optional input images used to condition or guide the generation process (e.g., for ControlNet
   * or image editing models). This field is only applicable when using ControlNet or image editing
   * models.
   */
  controlImages?: ControlImages;
  /**
   * A list of weights that determine the influence of each ControlNet model in the generation
   * process. Each value must be within [0, 1], where 0 disables the corresponding ControlNet and 1
   * applies it fully. When multiple ControlNet models are used, the list length must match the
   * number of control images. If omitted, all ControlNet models default to full influence (1.0).
   * This field is only applicable when using ControlNet models.
   */
  controlnetWeights?: ControlnetWeights;
};

export const containerImageGenerationBodySchema: Schema<ContainerImageGenerationBody> =
  s.object<ContainerImageGenerationBody>({
    model: s.optional(s.lazy(() => model1Schema)),
    prompt: s.string(),
    numInferenceSteps: s.defaulted(s.int(), 20),
    guidanceScale: s.defaulted(s.float64(), 0),
    seed: s.optional(s.lazy(() => seed14Schema)),
    responseFormat: s.optional(s.lazy(() => responseFormat11Schema)),
    controlImages: s.optional(s.lazy(() => controlImagesSchema)),
    controlnetWeights: s.optional(s.lazy(() => controlnetWeightsSchema)),
    _keysMap: {
      numInferenceSteps: "num_inference_steps",
      guidanceScale: "guidance_scale",
      responseFormat: "response_format",
      controlImages: "control_images",
      controlnetWeights: "controlnet_weights",
    },
  });
