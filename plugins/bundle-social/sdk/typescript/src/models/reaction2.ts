import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reaction2 = {
  Love: "love",
  Like: "like",
  Dislike: "dislike",
  Haha: "haha",
  Wow: "wow",
  Sad: "sad",
  Angry: "angry",
} as const;
export type Reaction2 = (typeof Reaction2)[keyof typeof Reaction2] | (string & {});

export const reaction2Schema: EnumSchema<Reaction2> = s.enumOf<Reaction2>(Reaction2);
