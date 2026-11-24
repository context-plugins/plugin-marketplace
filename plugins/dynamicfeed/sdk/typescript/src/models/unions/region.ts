import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ... */
export type Region = string;

export const regionSchema: Schema<Region> = s.of<Region>(s.union([s.string()]));
