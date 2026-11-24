import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Composition type of allocation. */
export const AllocationType1 = {
  Single: "single",
  Group: "group",
} as const;
export type AllocationType1 = (typeof AllocationType1)[keyof typeof AllocationType1] | (string & {});

export const allocationType1Schema: EnumSchema<AllocationType1> = s.enumOf<AllocationType1>(AllocationType1);
