import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Custom screen width in pixels for the browser. */
export type BrowserScreenWidth = number;

export const browserScreenWidthInternalSchema: Schema<BrowserScreenWidth> = s.of<BrowserScreenWidth>(
  s.union([s.int()]),
);

export const browserScreenWidthSchema: Schema<BrowserScreenWidth> = s.lazySchema(() =>
  s.of<BrowserScreenWidth>(s.union([s.int().check(s.gte(320), s.lte(6144))])),
);
