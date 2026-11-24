import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the toxic content type. */
export const Name1 = {
  Graphic: "GRAPHIC",
  HarassmentOrAbuse: "HARASSMENT_OR_ABUSE",
  HateSpeech: "HATE_SPEECH",
  Insult: "INSULT",
  Profanity: "PROFANITY",
  Sexual: "SEXUAL",
  ViolenceOrThreat: "VIOLENCE_OR_THREAT",
} as const;
export type Name1 = (typeof Name1)[keyof typeof Name1] | (string & {});

export const name1Schema: EnumSchema<Name1> = s.enumOf<Name1>(Name1);
