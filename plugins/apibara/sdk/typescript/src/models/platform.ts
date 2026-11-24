import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Platform = {
  Copart: "copart",
  Iaai: "iaai",
} as const;
export type Platform = (typeof Platform)[keyof typeof Platform] | (string & {});

export const platformSchema: EnumSchema<Platform> = s.enumOf<Platform>(Platform);
