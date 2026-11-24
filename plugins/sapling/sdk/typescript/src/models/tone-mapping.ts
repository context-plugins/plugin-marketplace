import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Target tone. Only used with mapping="switch_tone". */
export const ToneMapping = {
  Straightforward: "straightforward",
  Confident: "confident",
  Friendly: "friendly",
  Empathetic: "empathetic",
  Professional: "professional",
  Casual: "casual",
  Diplomatic: "diplomatic",
  Persuasive: "persuasive",
} as const;
export type ToneMapping = (typeof ToneMapping)[keyof typeof ToneMapping] | (string & {});

export const toneMappingSchema: EnumSchema<ToneMapping> = s.enumOf<ToneMapping>(ToneMapping);
