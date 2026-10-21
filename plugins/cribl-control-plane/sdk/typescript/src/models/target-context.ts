import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TargetContext = {
  Group: "group",
  Pack: "pack",
} as const;
export type TargetContext = (typeof TargetContext)[keyof typeof TargetContext] | (string & {});

export const targetContextSchema: EnumSchema<TargetContext> = s.enumOf<TargetContext>(TargetContext);
