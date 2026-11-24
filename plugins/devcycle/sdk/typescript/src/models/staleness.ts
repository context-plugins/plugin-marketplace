import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Staleness = {
  All: "all",
  Unused: "unused",
  Released: "released",
  Unmodified: "unmodified",
  NotStale: "notStale",
} as const;
export type Staleness = (typeof Staleness)[keyof typeof Staleness] | (string & {});

export const stalenessSchema: EnumSchema<Staleness> = s.enumOf<Staleness>(Staleness);
