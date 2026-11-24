import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the test set contains written or spoken data. */
export const Modality1 = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type Modality1 = (typeof Modality1)[keyof typeof Modality1] | (string & {});

export const modality1Schema: EnumSchema<Modality1> = s.enumOf<Modality1>(Modality1);
