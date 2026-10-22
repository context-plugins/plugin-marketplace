import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageFormatSchema, type ImageFormat } from "./image-format.js";
import { imageSizeSchema, type ImageSize } from "./unions/image-size.js";
import { modelSelectionSchema, type ModelSelection } from "./unions/model-selection.js";
import { targetSchema, type Target } from "./unions/target.js";

/**
 * Parameters for an image-generation request. Only `prompt` is required; all other fields fall back
 * to documented defaults.
 */
export type GenerateImageRequest = {
  /** The text description of the image to generate. */
  prompt: string;
  /**
   * Selects the model, in one of three mutually exclusive forms (omit to use the global default):
   *   * `ModelByFamily`: `family` (+ optional `tier`); the stable-over-time selector.
   *   * `ModelById`: an explicit `id`, pinning one exact model.
   *   * `ModelAuto`: `mode: auto`, letting the service choose the model for the request (+ optional
   *     `preference`).
   */
  model?: ModelSelection;
  /**
   * Desired output size, given in **one** of two mutually exclusive forms:
   *
   *   * `DimensionsImageSize`: `width` and `height` in pixels, for precise control.
   *   * `DeclarativeImageSize`: `aspect_ratio` (and an optional `resolution` tier), resolved
   *     server-side to the closest size the chosen model supports. This is the portable form: most
   *     providers natively accept an aspect ratio plus a resolution tier rather than raw pixels.
   *
   * Omit `image_size` entirely to use the model's default size.
   */
  imageSize?: ImageSize;
  /**
   * Desired output image format. Optional; defaults to `png` when omitted. Mapped to the closest
   * format the chosen model supports — `webp` falls back to `png` on models that don't support it
   * (e.g. FLUX.2 Pro), and the request is ignored entirely by models that don't expose a format
   * option (e.g. Recraft).
   */
  format?: ImageFormat;
  /**
   * Where to store the generated output, determined by `target_type`. Optional; defaults to a
   * `managed_asset` target when omitted.
   */
  target?: Target;
  /**
   * Seed for reproducible generation. Supported by the `flux`, `nano-banana` and `ideogram` models
   * and by `qwen-image-3`; silently ignored by the models that don't support it, which report
   * `seed` as null in the response.
   */
  seed?: number | null;
  /**
   * Whether to perform the generation asynchronously. When true, the API returns immediately with a
   * 202 and completes in the background. Once complete, a webhook notification is sent to the
   * specified URL and/or to the URLs defined in the product environment's settings.
   *
   * @default false
   */
  async?: boolean;
  /**
   * The webhook URL to notify when the generation is complete. Only relevant when `async` is set to
   * true.
   */
  notificationUrl?: string;
};

export const generateImageRequestSchema: Schema<GenerateImageRequest> = s.object<GenerateImageRequest>({
  prompt: s.string(),
  model: s.optional(s.lazy(() => modelSelectionSchema)),
  imageSize: s.optional(s.lazy(() => imageSizeSchema)),
  format: s.optional(s.lazy(() => imageFormatSchema)),
  target: s.optional(s.lazy(() => targetSchema)),
  seed: s.optionalNullable(s.int()),
  async: s.defaulted(s.boolean(), false),
  notificationUrl: s.optional(s.string()),
  _keysMap: {
    imageSize: "image_size",
    notificationUrl: "notification_url",
  },
});
