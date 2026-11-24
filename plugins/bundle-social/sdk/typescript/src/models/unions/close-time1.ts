import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { closeTimeInternalSchema, closeTimeSchema, type CloseTime } from "../close-time.js";

export type CloseTime1 = CloseTime | string;

export const closeTime1InternalSchema: Schema<CloseTime1> = s.of<CloseTime1>(
  s.union([s.lazy(() => closeTimeInternalSchema), s.string()]),
);

export const closeTime1Schema: Schema<CloseTime1> = s.lazySchema(() =>
  s.of<CloseTime1>(
    s.union([
      s.lazy(() => closeTimeSchema),
      s.string().check(s.pattern("^(?:[01]?\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$")),
    ]),
  ),
);
