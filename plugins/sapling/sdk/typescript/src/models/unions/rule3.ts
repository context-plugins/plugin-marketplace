import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { ruleInternalSchema, ruleSchema, type Rule } from "../rule.js";

export type Rule3 = string | Rule;

export const rule3InternalSchema: Schema<Rule3> = s.of<Rule3>(
  s.union([s.string(), s.lazy(() => ruleInternalSchema)]),
);

export const rule3Schema: Schema<Rule3> = s.lazySchema(() =>
  s.of<Rule3>(s.union([s.string().check(s.minLength(1), s.maxLength(80)), s.lazy(() => ruleSchema)])),
);
