import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type VinPrefix = string | string[];

export const vinPrefixInternalSchema: Schema<VinPrefix> = s.of<VinPrefix>(
  s.union([s.string(), s.array(s.string())]),
);

export const vinPrefixSchema: Schema<VinPrefix> = s.lazySchema(() =>
  s.of<VinPrefix>(
    s.union([
      s.string().check(s.maxLength(79)),
      s.array(s.string().check(s.minLength(1), s.maxLength(3))).check(s.maxLength(20)),
    ]),
  ),
);
