import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Maxcostusd = number | string;

export const maxcostusdInternalSchema: Schema<Maxcostusd> = s.of<Maxcostusd>(
  s.union([s.float64(), s.string()]),
);

export const maxcostusdSchema: Schema<Maxcostusd> = s.lazySchema(() =>
  s.of<Maxcostusd>(
    s.union([s.float64().check(s.gt(0)), s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$"))]),
  ),
);
