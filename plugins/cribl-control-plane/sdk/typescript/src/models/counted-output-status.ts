import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputStatusSchema, type OutputStatus } from "./output-status.js";

export type CountedOutputStatus = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: OutputStatus[];
};

export const countedOutputStatusSchema: Schema<CountedOutputStatus> = s.object<CountedOutputStatus>({
  count: s.int(),
  items: s.array(s.lazy(() => outputStatusSchema)),
});
