import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type81 = {
  Image: "IMAGE",
  Video: "VIDEO",
  Audio: "AUDIO",
  File: "FILE",
  Post: "POST",
  StoryMention: "STORY_MENTION",
  Unknown: "UNKNOWN",
} as const;
export type Type81 = (typeof Type81)[keyof typeof Type81] | (string & {});

export const type81Schema: EnumSchema<Type81> = s.enumOf<Type81>(Type81);
