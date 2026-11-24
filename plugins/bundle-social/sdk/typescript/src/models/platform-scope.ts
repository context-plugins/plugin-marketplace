import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformScope = {
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
  Both: "BOTH",
  Tiktok: "TIKTOK",
} as const;
export type PlatformScope = (typeof PlatformScope)[keyof typeof PlatformScope] | (string & {});

export const platformScopeSchema: EnumSchema<PlatformScope> = s.enumOf<PlatformScope>(PlatformScope);
