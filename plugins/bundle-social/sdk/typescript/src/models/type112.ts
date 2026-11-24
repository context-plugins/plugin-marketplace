import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type112 = {
  FacebookPersistentMenu: "FACEBOOK_PERSISTENT_MENU",
  InstagramIceBreakers: "INSTAGRAM_ICE_BREAKERS",
} as const;
export type Type112 = (typeof Type112)[keyof typeof Type112] | (string & {});

export const type112Schema: EnumSchema<Type112> = s.enumOf<Type112>(Type112);
