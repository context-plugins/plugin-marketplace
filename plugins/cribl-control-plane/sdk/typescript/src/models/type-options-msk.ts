import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsMsk = {
  Msk: "msk",
} as const;
export type TypeOptionsMsk = (typeof TypeOptionsMsk)[keyof typeof TypeOptionsMsk] | (string & {});

export const typeOptionsMskSchema: EnumSchema<TypeOptionsMsk> = s.enumOf<TypeOptionsMsk>(TypeOptionsMsk);
