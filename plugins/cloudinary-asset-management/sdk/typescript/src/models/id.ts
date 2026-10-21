import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Exact model identifier; overrides family/tier when provided. The `-edit` models accept reference
 * images and are selectable only on `image_to_image`; the others only on `text_to_image`.
 */
export const Id = {
  NanoBanana1: "nano-banana-1",
  NanoBanana2: "nano-banana-2",
  NanoBanana2Lite: "nano-banana-2-lite",
  Flux2Klein9B: "flux-2-klein-9b",
  Flux2Pro: "flux-2-pro",
  Flux2Flash: "flux-2-flash",
  RecraftV3: "recraft-v3",
  RecraftV4: "recraft-v4",
  GptImage1Mini: "gpt-image-1-mini",
  GptImage2: "gpt-image-2",
  GptImage25Flare: "gpt-image-2.5-flare",
  GptImage25Sunburst: "gpt-image-2.5-sunburst",
  MuseImage: "muse-image",
  MaiImage25: "mai-image-2.5",
  MaiImage25Pro: "mai-image-2.5-pro",
  Seedream5Pro: "seedream-5-pro",
  GrokImagineImage: "grok-imagine-image",
  RecraftV41Utility: "recraft-v4.1-utility",
  RecraftV41UtilityPro: "recraft-v4.1-utility-pro",
  Seedream5Lite: "seedream-5-lite",
  GrokImagineImage20Low: "grok-imagine-image-2.0-low",
  QwenImage3: "qwen-image-3",
  IdeogramV4Base: "ideogram-v4-base",
  IdeogramV4Turbo: "ideogram-v4-turbo",
  NanoBanana1Edit: "nano-banana-1-edit",
  NanoBanana2Edit: "nano-banana-2-edit",
  NanoBanana2LiteEdit: "nano-banana-2-lite-edit",
  Flux2Klein9BEdit: "flux-2-klein-9b-edit",
  Flux2ProEdit: "flux-2-pro-edit",
  Flux2FlashEdit: "flux-2-flash-edit",
  RecraftV3Edit: "recraft-v3-edit",
  GptImage1MiniEdit: "gpt-image-1-mini-edit",
  GptImage2Edit: "gpt-image-2-edit",
  GptImage25FlareEdit: "gpt-image-2.5-flare-edit",
  GptImage25SunburstEdit: "gpt-image-2.5-sunburst-edit",
  MuseImageEdit: "muse-image-edit",
  MaiImage25Edit: "mai-image-2.5-edit",
  MaiImage25ProEdit: "mai-image-2.5-pro-edit",
  Seedream5ProEdit: "seedream-5-pro-edit",
  GrokImagineImageEdit: "grok-imagine-image-edit",
  Seedream5LiteEdit: "seedream-5-lite-edit",
  GrokImagineImage20LowEdit: "grok-imagine-image-2.0-low-edit",
  QwenImage3Edit: "qwen-image-3-edit",
} as const;
export type Id = (typeof Id)[keyof typeof Id] | (string & {});

export const idSchema: EnumSchema<Id> = s.enumOf<Id>(Id);
