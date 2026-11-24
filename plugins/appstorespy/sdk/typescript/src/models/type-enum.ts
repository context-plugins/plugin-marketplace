import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const TypeEnum = {
  App: "APP",
  Game: "GAME",
} as const;
export type TypeEnum = (typeof TypeEnum)[keyof typeof TypeEnum] | (string & {});

export const typeEnumSchema: EnumSchema<TypeEnum> = s.enumOf<TypeEnum>(TypeEnum);
