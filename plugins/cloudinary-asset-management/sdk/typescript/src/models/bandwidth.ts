import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Bandwidth = {
  /** Bandwidth used in bytes */
  usage?: number;
  /** Bandwidth limit for the plan */
  limit?: number;
  /** Percentage of bandwidth limit used */
  usedPercent?: number;
};

export const bandwidthSchema: Schema<Bandwidth> = s.object<Bandwidth>({
  usage: s.optional(s.int()),
  limit: s.optional(s.int()),
  usedPercent: s.optional(s.float64()),
  _keysMap: {
    usedPercent: "used_percent",
  },
});
