import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fromSchema, type From } from "./from.js";
import { toSchema, type To } from "./to.js";

export type Links38 = {
  from?: From;
  to?: To;
};

export const links38Schema: Schema<Links38> = s.object<Links38>({
  from: s.optional(s.lazy(() => fromSchema)),
  to: s.optional(s.lazy(() => toSchema)),
});
