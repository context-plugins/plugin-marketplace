import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const Authentication3 = {
  GoogleOauthSecret: "google_oauthSecret",
} as const;
export type Authentication3 = (typeof Authentication3)[keyof typeof Authentication3] | (string & {});

export const authentication3Schema: EnumSchema<Authentication3> = s.enumOf<Authentication3>(Authentication3);
