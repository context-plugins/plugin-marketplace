import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Origin = {
  Platform: "platform",
  Bundle: "bundle",
} as const;
export type Origin = (typeof Origin)[keyof typeof Origin] | (string & {});

export const originSchema: EnumSchema<Origin> = s.enumOf<Origin>(Origin);
