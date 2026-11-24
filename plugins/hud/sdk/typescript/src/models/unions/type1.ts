import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Type1 = string;

export const type1InternalSchema: Schema<Type1> = s.of<Type1>(s.union([s.string()]));

export const type1Schema: Schema<Type1> = s.lazySchema(() =>
  s.of<Type1>(s.union([s.string().check(s.minLength(1), s.maxLength(64))])),
);
