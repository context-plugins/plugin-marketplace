import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Model = string;

export const modelInternalSchema: Schema<Model> = s.of<Model>(s.union([s.string()]));

export const modelSchema: Schema<Model> = s.lazySchema(() =>
  s.of<Model>(s.union([s.string().check(s.minLength(1), s.maxLength(200))])),
);
