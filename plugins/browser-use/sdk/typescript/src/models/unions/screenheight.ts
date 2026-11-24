import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Custom screen height in pixels for the browser. */
export type Screenheight = number;

export const screenheightInternalSchema: Schema<Screenheight> = s.of<Screenheight>(s.union([s.int()]));

export const screenheightSchema: Schema<Screenheight> = s.lazySchema(() =>
  s.of<Screenheight>(s.union([s.int().check(s.gte(320), s.lte(3456))])),
);
