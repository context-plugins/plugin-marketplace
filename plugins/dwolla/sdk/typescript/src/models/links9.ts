import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfSchema, type Self } from "./self.js";

export type Links9 = {
  self?: Self;
};

export const links9Schema: Schema<Links9> = s.object<Links9>({
  self: s.optional(s.lazy(() => selfSchema)),
});
