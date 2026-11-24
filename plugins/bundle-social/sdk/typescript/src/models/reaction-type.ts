import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReactionType = {
  Like: "LIKE",
  Love: "LOVE",
  Wow: "WOW",
  Haha: "HAHA",
  Sad: "SAD",
  Angry: "ANGRY",
} as const;
export type ReactionType = (typeof ReactionType)[keyof typeof ReactionType] | (string & {});

export const reactionTypeSchema: EnumSchema<ReactionType> = s.enumOf<ReactionType>(ReactionType);
