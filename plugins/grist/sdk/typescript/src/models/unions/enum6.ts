import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Enum6 = unknown;

export const enum6InternalSchema: Schema<Enum6> = s.of<Enum6>(s.union([s.array(s.string()), s.unknown()]));

export const enum6Schema: Schema<Enum6> = s.lazySchema(() =>
  s.of<Enum6>(s.union([s.array(s.string()).check(s.minLength(1), s.uniqueItems()), s.unknown()])),
);
