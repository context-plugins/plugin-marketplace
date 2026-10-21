import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DateField = {
  Created: "created",
  Modified: "modified",
} as const;
export type DateField = (typeof DateField)[keyof typeof DateField] | (string & {});

export const dateFieldSchema: EnumSchema<DateField> = s.enumOf<DateField>(DateField);
