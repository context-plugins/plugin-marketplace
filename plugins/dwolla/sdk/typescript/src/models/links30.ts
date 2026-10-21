import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { self8Schema, type Self8 } from "./self8.js";

export type Links30 = {
  self?: Self8;
};

export const links30Schema: Schema<Links30> = s.object<Links30>({
  self: s.optional(s.lazy(() => self8Schema)),
});
