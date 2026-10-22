import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { masterWorkerEntrySchema, type MasterWorkerEntry } from "./master-worker-entry.js";

export type CountedMasterWorkerEntry = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: MasterWorkerEntry[];
};

export const countedMasterWorkerEntrySchema: Schema<CountedMasterWorkerEntry> =
  s.object<CountedMasterWorkerEntry>({
    count: s.int(),
    items: s.array(s.lazy(() => masterWorkerEntrySchema)),
  });
