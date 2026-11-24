import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { item4InternalSchema, item4Schema, type Item4 } from "../item4.js";
import { item41InternalSchema, item41Schema, type Item41 } from "../item41.js";

export type Item42 = Item4 | Item41;

export const item42InternalSchema: Schema<Item42> = s.of<Item42>(
  s.union([s.lazy(() => item4InternalSchema), s.lazy(() => item41InternalSchema)]),
);

export const item42Schema: Schema<Item42> = s.lazySchema(() =>
  s.of<Item42>(s.union([s.lazy(() => item4Schema), s.lazy(() => item41Schema)])),
);
