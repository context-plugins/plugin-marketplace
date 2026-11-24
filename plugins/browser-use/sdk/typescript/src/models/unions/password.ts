import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Password for proxy authentication. */
export type Password = string;

export const passwordInternalSchema: Schema<Password> = s.of<Password>(s.union([s.string()]));

export const passwordSchema: Schema<Password> = s.lazySchema(() =>
  s.of<Password>(s.union([s.string().check(s.minLength(1), s.maxLength(255))])),
);
