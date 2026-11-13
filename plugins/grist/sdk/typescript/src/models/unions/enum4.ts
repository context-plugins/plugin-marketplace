import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Enum4 = unknown;

export const enum4InternalSchema: Schema<Enum4> = s.of<Enum4>(
  s.union([s.array(s.string()), s.unknown(), s.array(s.record(s.string(), s.unknown()))]),
);

export const enum4Schema: Schema<Enum4> = s.lazySchema(() =>
  s.of<Enum4>(
    s.union([
      s.array(s.string()).check(s.minLength(1), s.uniqueItems()),
      s.unknown(),
      s.array(s.record(s.string(), s.unknown())).check(s.minLength(1), s.uniqueItems()),
    ]),
  ),
);
