import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EffectJidVerifyApi = {
  Stop: "stop",
  Review: "review",
} as const;
export type EffectJidVerifyApi = (typeof EffectJidVerifyApi)[keyof typeof EffectJidVerifyApi] | (string & {});

export const effectJidVerifyApiSchema: EnumSchema<EffectJidVerifyApi> =
  s.enumOf<EffectJidVerifyApi>(EffectJidVerifyApi);
