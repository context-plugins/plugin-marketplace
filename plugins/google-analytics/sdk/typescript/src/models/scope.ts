import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Immutable. The scope of this custom metric. */
export const Scope = {
  MetricScopeUnspecified: "METRIC_SCOPE_UNSPECIFIED",
  Event: "EVENT",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
