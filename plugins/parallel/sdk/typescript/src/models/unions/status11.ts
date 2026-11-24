import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { status1Schema, type Status1 } from "../status1.js";

/**
 * Filter by monitor status. Pass multiple times to filter by multiple values. Defaults to `active`
 * only.
 */
export type Status11 = Status1[];

export const status11Schema: Schema<Status11> = s.of<Status11>(
  s.union([s.array(s.lazy(() => status1Schema))]),
);
