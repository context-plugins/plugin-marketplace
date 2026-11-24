import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether audio or text is used for the updated test set. */
export const Modality2 = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type Modality2 = (typeof Modality2)[keyof typeof Modality2] | (string & {});

export const modality2Schema: EnumSchema<Modality2> = s.enumOf<Modality2>(Modality2);
