import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether the test-set being imported contains written or spoken data. */
export const Modality = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type Modality = (typeof Modality)[keyof typeof Modality] | (string & {});

export const modalitySchema: EnumSchema<Modality> = s.enumOf<Modality>(Modality);
