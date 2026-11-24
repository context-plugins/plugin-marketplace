import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Output = {
  Json: "json",
  Html: "html",
} as const;
export type Output = (typeof Output)[keyof typeof Output] | (string & {});

export const outputSchema: EnumSchema<Output> = s.enumOf<Output>(Output);
