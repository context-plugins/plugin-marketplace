import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { buttonInternalSchema, buttonSchema, type Button } from "../button.js";
import { button1InternalSchema, button1Schema, type Button1 } from "../button1.js";
import { button2InternalSchema, button2Schema, type Button2 } from "../button2.js";

export type Button3 = Button | Button1 | Button2;

export const button3InternalSchema: Schema<Button3> = s.of<Button3>(
  s.union([
    s.lazy(() => buttonInternalSchema),
    s.lazy(() => button1InternalSchema),
    s.lazy(() => button2InternalSchema),
  ]),
);

export const button3Schema: Schema<Button3> = s.lazySchema(() =>
  s.of<Button3>(
    s.union([s.lazy(() => buttonSchema), s.lazy(() => button1Schema), s.lazy(() => button2Schema)]),
  ),
);
