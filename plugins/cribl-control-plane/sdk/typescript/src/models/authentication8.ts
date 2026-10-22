import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const Authentication8 = {
  TokenSecret: "tokenSecret",
} as const;
export type Authentication8 = (typeof Authentication8)[keyof typeof Authentication8] | (string & {});

export const authentication8Schema: EnumSchema<Authentication8> = s.enumOf<Authentication8>(Authentication8);
