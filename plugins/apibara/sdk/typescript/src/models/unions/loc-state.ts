import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LocState = string | string[];

export const locStateInternalSchema: Schema<LocState> = s.of<LocState>(
  s.union([s.string(), s.array(s.string())]),
);

export const locStateSchema: Schema<LocState> = s.lazySchema(() =>
  s.of<LocState>(
    s.union([
      s.string().check(s.pattern("^[A-Za-z]{2,3}$")),
      s.array(s.string().check(s.pattern("^[A-Za-z]{2,3}$"))),
    ]),
  ),
);
