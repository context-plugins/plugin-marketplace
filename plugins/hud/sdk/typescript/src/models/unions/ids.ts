import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Ids = string[];

export const idsInternalSchema: Schema<Ids> = s.of<Ids>(s.union([s.array(s.string())]));

export const idsSchema: Schema<Ids> = s.lazySchema(() =>
  s.of<Ids>(s.union([s.array(s.string()).check(s.maxLength(500))])),
);
