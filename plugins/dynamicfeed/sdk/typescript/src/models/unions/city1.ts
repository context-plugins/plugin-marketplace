import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type City1 = string;

export const city1InternalSchema: Schema<City1> = s.of<City1>(s.union([s.string()]));

export const city1Schema: Schema<City1> = s.lazySchema(() =>
  s.of<City1>(s.union([s.string().check(s.maxLength(80))])),
);
