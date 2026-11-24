import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { button126InternalSchema, button126Schema, type Button126 } from "../button126.js";
import { button1261InternalSchema, button1261Schema, type Button1261 } from "../button1261.js";
import { button1262InternalSchema, button1262Schema, type Button1262 } from "../button1262.js";

export type Button1263 = Button126 | Button1261 | Button1262;

export const button1263InternalSchema: Schema<Button1263> = s.of<Button1263>(
  s.union([
    s.lazy(() => button126InternalSchema),
    s.lazy(() => button1261InternalSchema),
    s.lazy(() => button1262InternalSchema),
  ]),
);

export const button1263Schema: Schema<Button1263> = s.lazySchema(() =>
  s.of<Button1263>(
    s.union([s.lazy(() => button126Schema), s.lazy(() => button1261Schema), s.lazy(() => button1262Schema)]),
  ),
);
