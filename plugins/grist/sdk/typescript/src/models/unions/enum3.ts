import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Enum3 = string[] | Record<string, unknown>[];

export const enum3InternalSchema: Schema<Enum3> = s.of<Enum3>(
  s.union([s.array(s.string()), s.array(s.record(s.string(), s.unknown()))]),
);

export const enum3Schema: Schema<Enum3> = s.lazySchema(() =>
  s.of<Enum3>(
    s.union([
      s.array(s.string()).check(s.minLength(1), s.uniqueItems()),
      s.array(s.record(s.string(), s.unknown())).check(s.minLength(1), s.uniqueItems()),
    ]),
  ),
);
