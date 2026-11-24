import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Custom screen width in pixels for the browser. */
export type Screenwidth = number;

export const screenwidthInternalSchema: Schema<Screenwidth> = s.of<Screenwidth>(s.union([s.int()]));

export const screenwidthSchema: Schema<Screenwidth> = s.lazySchema(() =>
  s.of<Screenwidth>(s.union([s.int().check(s.gte(320), s.lte(6144))])),
);
