import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If this is a metric, then it represents the kind of event the metric tracks. If this is a metric
 * group, then it represents the group type
 */
export const Kind5 = {
  Pageview: "pageview",
  Click: "click",
  Custom: "custom",
  Funnel: "funnel",
  Standard: "standard",
  Guardrail: "guardrail",
} as const;
export type Kind5 = (typeof Kind5)[keyof typeof Kind5] | (string & {});

export const kind5Schema: EnumSchema<Kind5> = s.enumOf<Kind5>(Kind5);
