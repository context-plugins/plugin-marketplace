import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Case-insensitive match on display name, model name, or provider name. */
export type Search = string;

export const searchInternalSchema: Schema<Search> = s.of<Search>(s.union([s.string()]));

export const searchSchema: Schema<Search> = s.lazySchema(() =>
  s.of<Search>(s.union([s.string().check(s.maxLength(200))])),
);
