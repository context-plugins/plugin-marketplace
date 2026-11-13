import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Enum1 = string[] | number[];

export const enum1InternalSchema: Schema<Enum1> = s.of<Enum1>(
  s.union([s.array(s.string()), s.array(s.int())]),
);

export const enum1Schema: Schema<Enum1> = s.lazySchema(() =>
  s.of<Enum1>(
    s.union([
      s.array(s.string()).check(s.minLength(1), s.uniqueItems()),
      s.array(s.int()).check(s.minLength(1), s.uniqueItems()),
    ]),
  ),
);
