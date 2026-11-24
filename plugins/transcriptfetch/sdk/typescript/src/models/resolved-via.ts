import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResolvedVia = {
  Spotify: "spotify",
  Apple: "apple",
  Rss: "rss",
  Direct: "direct",
} as const;
export type ResolvedVia = (typeof ResolvedVia)[keyof typeof ResolvedVia] | (string & {});

export const resolvedViaSchema: EnumSchema<ResolvedVia> = s.enumOf<ResolvedVia>(ResolvedVia);
