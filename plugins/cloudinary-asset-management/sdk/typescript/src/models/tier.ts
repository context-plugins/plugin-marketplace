import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Quality tier within the family. Defaults to `standard` when omitted. */
export const Tier = {
  Standard: "standard",
  Premium: "premium",
} as const;
export type Tier = (typeof Tier)[keyof typeof Tier] | (string & {});

export const tierSchema: EnumSchema<Tier> = s.enumOf<Tier>(Tier);
