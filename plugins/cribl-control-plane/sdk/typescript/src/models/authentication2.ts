import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const Authentication2 = {
  GoogleOauth: "google_oauth",
} as const;
export type Authentication2 = (typeof Authentication2)[keyof typeof Authentication2] | (string & {});

export const authentication2Schema: EnumSchema<Authentication2> = s.enumOf<Authentication2>(Authentication2);
