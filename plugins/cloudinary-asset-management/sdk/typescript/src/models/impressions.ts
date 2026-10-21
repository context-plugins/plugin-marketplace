import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Impressions = {
  /** Number of impressions used */
  usage?: number;
};

export const impressionsSchema: Schema<Impressions> = s.object<Impressions>({
  usage: s.optional(s.int()),
});
