import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Storage = {
  /** Storage used in bytes */
  usage?: number;
  /** Storage limit for the plan */
  limit?: number;
  /** Percentage of storage limit used */
  usedPercent?: number;
};

export const storageSchema: Schema<Storage> = s.object<Storage>({
  usage: s.optional(s.int()),
  limit: s.optional(s.int()),
  usedPercent: s.optional(s.float64()),
  _keysMap: {
    usedPercent: "used_percent",
  },
});
