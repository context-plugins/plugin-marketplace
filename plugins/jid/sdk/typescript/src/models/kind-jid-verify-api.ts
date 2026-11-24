import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindJidVerifyApi = {
  Registration: "registration",
  Flag: "flag",
  Unheld: "unheld",
} as const;
export type KindJidVerifyApi = (typeof KindJidVerifyApi)[keyof typeof KindJidVerifyApi] | (string & {});

export const kindJidVerifyApiSchema: EnumSchema<KindJidVerifyApi> =
  s.enumOf<KindJidVerifyApi>(KindJidVerifyApi);
