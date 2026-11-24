import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Messaging platform. Extensible: new platforms are added over time, so handle unknown values
 * gracefully rather than switching exhaustively.
 */
export const Platform30 = {
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
} as const;
export type Platform30 = (typeof Platform30)[keyof typeof Platform30] | (string & {});

export const platform30Schema: EnumSchema<Platform30> = s.enumOf<Platform30>(Platform30);
