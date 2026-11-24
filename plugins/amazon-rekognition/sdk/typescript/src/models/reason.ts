import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason = {
  FaceNotFound: "FACE_NOT_FOUND",
  AssociatedToADifferentUser: "ASSOCIATED_TO_A_DIFFERENT_USER",
  LowMatchConfidence: "LOW_MATCH_CONFIDENCE",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
