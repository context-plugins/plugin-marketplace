import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleSchema, type Rule } from "./rule.js";

/** Rules that select processes for AppScope instrumentation. */
export type Filter = {
  /** Specify processes that AppScope should be loaded into, and the config to use. */
  allow?: Rule[];
  /**
   * To override the UNIX domain socket or address/port specified in General Settings (while leaving
   * Authentication settings as is), enter a URL.
   */
  transportUrl?: string;
};

export const filterSchema: Schema<Filter> = s.object<Filter>({
  allow: s.optional(s.array(s.lazy(() => ruleSchema))),
  transportUrl: s.optional(s.string()),
  _keysMap: {
    transportUrl: "transportURL",
  },
});
