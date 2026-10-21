import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfSchema, type Self } from "./self.js";
import { webhook1Schema, type Webhook1 } from "./webhook1.js";

export type Links14 = {
  self?: Self;
  webhook?: Webhook1;
};

export const links14Schema: Schema<Links14> = s.object<Links14>({
  self: s.optional(s.lazy(() => selfSchema)),
  webhook: s.optional(s.lazy(() => webhook1Schema)),
});
