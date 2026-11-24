import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Name = string;

export const nameInternalSchema: Schema<Name> = s.of<Name>(s.union([s.string()]));

export const nameSchema: Schema<Name> = s.lazySchema(() =>
  s.of<Name>(s.union([s.string().check(s.maxLength(255))])),
);
