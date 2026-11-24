import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Image = string;

export const imageInternalSchema: Schema<Image> = s.of<Image>(s.union([s.string()]));

export const imageSchema: Schema<Image> = s.lazySchema(() =>
  s.of<Image>(s.union([s.string().check(s.minLength(1))])),
);
