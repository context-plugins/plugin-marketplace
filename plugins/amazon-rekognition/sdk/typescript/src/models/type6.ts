import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the technical cue. */
export const Type6 = {
  ColorBars: "ColorBars",
  EndCredits: "EndCredits",
  BlackFrames: "BlackFrames",
  OpeningCredits: "OpeningCredits",
  StudioLogo: "StudioLogo",
  Slate: "Slate",
  Content: "Content",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
