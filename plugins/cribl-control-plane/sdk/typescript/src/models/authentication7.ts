import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const Authentication7 = {
  Token: "token",
} as const;
export type Authentication7 = (typeof Authentication7)[keyof typeof Authentication7] | (string & {});

export const authentication7Schema: EnumSchema<Authentication7> = s.enumOf<Authentication7>(Authentication7);
