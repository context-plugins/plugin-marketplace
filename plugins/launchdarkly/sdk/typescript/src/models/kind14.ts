import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The kind of event your metric will track */
export const Kind14 = {
  Pageview: "pageview",
  Click: "click",
  Custom: "custom",
} as const;
export type Kind14 = (typeof Kind14)[keyof typeof Kind14] | (string & {});

export const kind14Schema: EnumSchema<Kind14> = s.enumOf<Kind14>(Kind14);
