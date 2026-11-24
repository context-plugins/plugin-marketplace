import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason2 = {
  FaceNotFound: "FACE_NOT_FOUND",
  AssociatedToADifferentUser: "ASSOCIATED_TO_A_DIFFERENT_USER",
} as const;
export type Reason2 = (typeof Reason2)[keyof typeof Reason2] | (string & {});

export const reason2Schema: EnumSchema<Reason2> = s.enumOf<Reason2>(Reason2);
