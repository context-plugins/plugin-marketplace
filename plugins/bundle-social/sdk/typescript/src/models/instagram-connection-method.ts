import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InstagramConnectionMethod = {
  Facebook: "FACEBOOK",
  Instagram: "INSTAGRAM",
} as const;
export type InstagramConnectionMethod =
  | (typeof InstagramConnectionMethod)[keyof typeof InstagramConnectionMethod]
  | (string & {});

export const instagramConnectionMethodSchema: EnumSchema<InstagramConnectionMethod> =
  s.enumOf<InstagramConnectionMethod>(InstagramConnectionMethod);
