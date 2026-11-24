import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Slugs = string[];

export const slugsInternalSchema: Schema<Slugs> = s.of<Slugs>(s.union([s.array(s.string())]));

export const slugsSchema: Schema<Slugs> = s.lazySchema(() =>
  s.of<Slugs>(s.union([s.array(s.string()).check(s.maxLength(500))])),
);
