import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Custom screen height in pixels for the browser. */
export type BrowserScreenHeight = number;

export const browserScreenHeightInternalSchema: Schema<BrowserScreenHeight> = s.of<BrowserScreenHeight>(
  s.union([s.int()]),
);

export const browserScreenHeightSchema: Schema<BrowserScreenHeight> = s.lazySchema(() =>
  s.of<BrowserScreenHeight>(s.union([s.int().check(s.gte(320), s.lte(3456))])),
);
