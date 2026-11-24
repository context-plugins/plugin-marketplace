import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Deeplinks = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type Deeplinks = (typeof Deeplinks)[keyof typeof Deeplinks] | (string & {});

export const deeplinksSchema: EnumSchema<Deeplinks> = s.enumOf<Deeplinks>(Deeplinks);
