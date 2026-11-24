import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An enumeration. */
export const Store = {
  Play: "play",
  Ios: "ios",
} as const;
export type Store = (typeof Store)[keyof typeof Store] | (string & {});

export const storeSchema: EnumSchema<Store> = s.enumOf<Store>(Store);
