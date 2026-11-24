import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Username for proxy authentication. */
export type Username = string;

export const usernameInternalSchema: Schema<Username> = s.of<Username>(s.union([s.string()]));

export const usernameSchema: Schema<Username> = s.lazySchema(() =>
  s.of<Username>(s.union([s.string().check(s.minLength(1), s.maxLength(255))])),
);
