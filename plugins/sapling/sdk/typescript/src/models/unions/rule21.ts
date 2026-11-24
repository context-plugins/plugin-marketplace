import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { rule2InternalSchema, rule2Schema, type Rule2 } from "../rule2.js";

export type Rule21 = string | Rule2;

export const rule21InternalSchema: Schema<Rule21> = s.of<Rule21>(
  s.union([s.string(), s.lazy(() => rule2InternalSchema)]),
);

export const rule21Schema: Schema<Rule21> = s.lazySchema(() =>
  s.of<Rule21>(s.union([s.string().check(s.maxLength(80)), s.lazy(() => rule2Schema)])),
);
