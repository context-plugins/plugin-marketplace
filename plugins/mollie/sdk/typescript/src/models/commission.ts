import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The commission object. */
export type Commission = {
  /** The commission count. */
  count?: number;
};

export const commissionSchema: Schema<Commission> = s.object<Commission>({
  count: s.optional(s.int()),
});
