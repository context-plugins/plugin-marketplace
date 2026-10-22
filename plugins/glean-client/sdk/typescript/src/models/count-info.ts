import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodSchema, type Period } from "./period.js";

export type CountInfo = {
  /** The counter value */
  count: number;
  period?: Period;
  /**
   * The unit of organization over which we did the count aggregation, e.g. org (department) or
   * company
   */
  org?: string;
};

export const countInfoSchema: Schema<CountInfo> = s.object<CountInfo>({
  count: s.int(),
  period: s.optional(s.lazy(() => periodSchema)),
  org: s.optional(s.string()),
});
