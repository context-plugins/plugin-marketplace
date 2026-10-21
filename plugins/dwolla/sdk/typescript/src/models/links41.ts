import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firstSchema, type First } from "./first.js";
import { lastSchema, type Last } from "./last.js";
import { nextSchema, type Next } from "./next.js";
import { selfSchema, type Self } from "./self.js";

export type Links41 = {
  self?: Self;
  first?: First;
  last?: Last;
  next?: Next;
};

export const links41Schema: Schema<Links41> = s.object<Links41>({
  self: s.optional(s.lazy(() => selfSchema)),
  first: s.optional(s.lazy(() => firstSchema)),
  last: s.optional(s.lazy(() => lastSchema)),
  next: s.optional(s.lazy(() => nextSchema)),
});
