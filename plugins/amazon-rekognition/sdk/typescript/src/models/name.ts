import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The detected body part. */
export const Name = {
  Face: "FACE",
  Head: "HEAD",
  LeftHand: "LEFT_HAND",
  RightHand: "RIGHT_HAND",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
