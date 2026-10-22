import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Only PERIOD can omit the resolution target when scope is present. */
export const Scope = {
  Period: "PERIOD",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
