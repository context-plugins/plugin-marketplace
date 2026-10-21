import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const Authentication4 = {
  Hmac: "hmac",
} as const;
export type Authentication4 = (typeof Authentication4)[keyof typeof Authentication4] | (string & {});

export const authentication4Schema: EnumSchema<Authentication4> = s.enumOf<Authentication4>(Authentication4);
