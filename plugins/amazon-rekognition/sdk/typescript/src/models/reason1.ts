import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason1 = {
  AssociatedToAnExistingUser: "ASSOCIATED_TO_AN_EXISTING_USER",
  FaceNotFound: "FACE_NOT_FOUND",
} as const;
export type Reason1 = (typeof Reason1)[keyof typeof Reason1] | (string & {});

export const reason1Schema: EnumSchema<Reason1> = s.enumOf<Reason1>(Reason1);
