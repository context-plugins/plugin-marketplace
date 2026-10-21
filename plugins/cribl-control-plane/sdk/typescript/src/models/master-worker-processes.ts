import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MasterWorkerProcesses = {
  /** Number of Worker Processes represented by the node entry. */
  count: number;
};

export const masterWorkerProcessesSchema: Schema<MasterWorkerProcesses> = s.object<MasterWorkerProcesses>({
  count: s.int(),
});
