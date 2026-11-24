import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { openTimeInternalSchema, openTimeSchema, type OpenTime } from "../open-time.js";

export type OpenTime1 = OpenTime | string;

export const openTime1InternalSchema: Schema<OpenTime1> = s.of<OpenTime1>(
  s.union([s.lazy(() => openTimeInternalSchema), s.string()]),
);

export const openTime1Schema: Schema<OpenTime1> = s.lazySchema(() =>
  s.of<OpenTime1>(
    s.union([
      s.lazy(() => openTimeSchema),
      s.string().check(s.pattern("^(?:[01]?\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$")),
    ]),
  ),
);
