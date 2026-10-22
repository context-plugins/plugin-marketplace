import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { jobInfoSchema, type JobInfo } from "./job-info.js";

export type CountedJobInfo = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: JobInfo[];
};

export const countedJobInfoSchema: Schema<CountedJobInfo> = s.object<CountedJobInfo>({
  count: s.int(),
  items: s.array(s.lazy(() => jobInfoSchema)),
});
