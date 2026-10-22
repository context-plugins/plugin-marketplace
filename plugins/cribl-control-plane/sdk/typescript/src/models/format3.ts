import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Content format in which the endpoint should deliver events */
export const Format3 = {
  Raw: "Raw",
  RenderedText: "RenderedText",
} as const;
export type Format3 = (typeof Format3)[keyof typeof Format3] | (string & {});

export const format3Schema: EnumSchema<Format3> = s.enumOf<Format3>(Format3);
