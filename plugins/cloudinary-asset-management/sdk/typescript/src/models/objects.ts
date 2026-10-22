import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Objects = {
  /** Number of objects used */
  usage?: number;
  /** Object limit for the plan */
  limit?: number;
  /** Percentage of object limit used */
  usedPercent?: number;
};

export const objectsSchema: Schema<Objects> = s.object<Objects>({
  usage: s.optional(s.int()),
  limit: s.optional(s.int()),
  usedPercent: s.optional(s.float64()),
  _keysMap: {
    usedPercent: "used_percent",
  },
});
