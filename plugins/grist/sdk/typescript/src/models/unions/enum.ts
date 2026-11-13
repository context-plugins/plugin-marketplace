import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Enum = string[] | number[];

export const enumInternalSchema: Schema<Enum> = s.of<Enum>(
  s.union([s.array(s.string()), s.array(s.float64())]),
);

export const enumSchema: Schema<Enum> = s.lazySchema(() =>
  s.of<Enum>(
    s.union([
      s.array(s.string()).check(s.minLength(1), s.uniqueItems()),
      s.array(s.float64()).check(s.minLength(1), s.uniqueItems()),
    ]),
  ),
);
