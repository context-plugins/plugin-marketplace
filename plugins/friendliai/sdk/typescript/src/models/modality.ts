import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported input and output modalities. */
export const Modality = {
  Text: "text",
  Audio: "audio",
  Image: "image",
  Video: "video",
  Pdf: "pdf",
} as const;
export type Modality = (typeof Modality)[keyof typeof Modality] | (string & {});

export const modalitySchema: EnumSchema<Modality> = s.enumOf<Modality>(Modality);
