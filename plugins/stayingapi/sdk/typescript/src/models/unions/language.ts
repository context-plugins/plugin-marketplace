import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Language = string;

export const languageInternalSchema: Schema<Language> = s.of<Language>(s.union([s.string()]));

export const languageSchema: Schema<Language> = s.lazySchema(() =>
  s.of<Language>(s.union([s.string().check(s.pattern("^[a-z]{2}$"))])),
);
