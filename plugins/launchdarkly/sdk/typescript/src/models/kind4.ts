import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The kind of event the metric tracks */
export const Kind4 = {
  Pageview: "pageview",
  Click: "click",
  Custom: "custom",
} as const;
export type Kind4 = (typeof Kind4)[keyof typeof Kind4] | (string & {});

export const kind4Schema: EnumSchema<Kind4> = s.enumOf<Kind4>(Kind4);
