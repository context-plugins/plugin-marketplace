import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Visibility = {
  Private: "private",
  Shared: "shared",
} as const;
export type Visibility = (typeof Visibility)[keyof typeof Visibility] | (string & {});

export const visibilitySchema: EnumSchema<Visibility> = s.enumOf<Visibility>(Visibility);
