import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageFormatSchema, type ImageFormat } from "./image-format.js";
import { imageSizeSchema, type ImageSize } from "./unions/image-size.js";
import { modelSelectionSchema, type ModelSelection } from "./unions/model-selection.js";
import { referenceImageSchema, type ReferenceImage } from "./unions/reference-image.js";
import { targetSchema, type Target } from "./unions/target.js";

/**
 * Parameters for an image-to-image (reference-guided) request. Both `prompt` (the edit instruction)
 * and `reference_images` are required; all other fields fall back to the same defaults as
 * `text_to_image`.
 */
export type ImageToImageRequest = {
  /** The text instruction describing the desired edit / output. */
  prompt: string;
  /**
   * Reference images that steer the generation, in order (1-indexed; the prompt may address them
   * positionally as `[1]`, `[2]`, …). Each entry is either a managed asset (by `asset_id`) or an
   * external `url`. The platform accepts up to 4; a specific model may accept fewer — the
   * `recraft-v3-edit` and `mai-image` edit models accept 1, and the `grok-imagine` and `qwen-image`
   * edit models accept 3. Exceeding the selected model's capacity returns 400.
   */
  referenceImages: ReferenceImage[];
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

export const imageToImageRequestSchema: Schema<ImageToImageRequest> = s.object<ImageToImageRequest>({
  prompt: s.string(),
  referenceImages: s.array(s.lazy(() => referenceImageSchema)),
  model: s.optional(s.lazy(() => modelSelectionSchema)),
  imageSize: s.optional(s.lazy(() => imageSizeSchema)),
  format: s.optional(s.lazy(() => imageFormatSchema)),
  target: s.optional(s.lazy(() => targetSchema)),
  seed: s.optionalNullable(s.int()),
  async: s.defaulted(s.boolean(), false),
  notificationUrl: s.optional(s.string()),
  _keysMap: {
    referenceImages: "reference_images",
    imageSize: "image_size",
    notificationUrl: "notification_url",
  },
});
