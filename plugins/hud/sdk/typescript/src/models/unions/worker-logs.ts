import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type WorkerLogs = string;

export const workerLogsSchema: Schema<WorkerLogs> = s.of<WorkerLogs>(s.union([s.string()]));
