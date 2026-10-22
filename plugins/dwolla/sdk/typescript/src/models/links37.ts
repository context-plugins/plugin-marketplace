import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firstSchema, type First } from "./first.js";
import { lastSchema, type Last } from "./last.js";
import { selfSchema, type Self } from "./self.js";

export type Links37 = {
  self?: Self;
  first?: First;
  last?: Last;
};

export const links37Schema: Schema<Links37> = s.object<Links37>({
  self: s.optional(s.lazy(() => selfSchema)),
  first: s.optional(s.lazy(() => firstSchema)),
  last: s.optional(s.lazy(() => lastSchema)),
});
