import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Composition type of allocation (single or group). */
export const AllocationType = {
  Single: "single",
  Group: "group",
} as const;
export type AllocationType = (typeof AllocationType)[keyof typeof AllocationType] | (string & {});

export const allocationTypeSchema: EnumSchema<AllocationType> = s.enumOf<AllocationType>(AllocationType);
