import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Country = string;

export const countryInternalSchema: Schema<Country> = s.of<Country>(s.union([s.string()]));

export const countrySchema: Schema<Country> = s.lazySchema(() =>
  s.of<Country>(s.union([s.string().check(s.minLength(2), s.maxLength(2))])),
);
