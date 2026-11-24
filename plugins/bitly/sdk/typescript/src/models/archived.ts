import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Archived = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type Archived = (typeof Archived)[keyof typeof Archived] | (string & {});

export const archivedSchema: EnumSchema<Archived> = s.enumOf<Archived>(Archived);
