import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Context = string;

export const contextInternalSchema: Schema<Context> = s.of<Context>(s.union([s.string()]));

export const contextSchema: Schema<Context> = s.lazySchema(() =>
  s.of<Context>(s.union([s.string().check(s.maxLength(10000))])),
);
