import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Intent = {
  Save: "Save",
  Complete: "Complete",
  Validate: "Validate",
} as const;
export type Intent = (typeof Intent)[keyof typeof Intent] | (string & {});

export const intentSchema: EnumSchema<Intent> = s.enumOf<Intent>(Intent);
