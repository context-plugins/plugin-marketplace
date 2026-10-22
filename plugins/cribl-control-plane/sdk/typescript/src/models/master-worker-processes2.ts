import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Worker Process counts associated with the node entry. */
export type MasterWorkerProcesses2 = {
  /** Number of Worker Processes represented by the node entry. */
  count: number;
};

export const masterWorkerProcesses2Schema: Schema<MasterWorkerProcesses2> = s.object<MasterWorkerProcesses2>({
  count: s.int(),
});
