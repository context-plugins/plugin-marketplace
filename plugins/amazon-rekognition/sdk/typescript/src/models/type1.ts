import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of emotion detected. */
export const Type1 = {
  Happy: "HAPPY",
  Sad: "SAD",
  Angry: "ANGRY",
  Confused: "CONFUSED",
  Disgusted: "DISGUSTED",
  Surprised: "SURPRISED",
  Calm: "CALM",
  Unknown: "UNKNOWN",
  Fear: "FEAR",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
