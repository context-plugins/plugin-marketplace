import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { envLogEntrySchema, type EnvLogEntry } from "../env-log-entry.js";

export type EnvLogs = EnvLogEntry[];

export const envLogsSchema: Schema<EnvLogs> = s.of<EnvLogs>(
  s.union([s.array(s.lazy(() => envLogEntrySchema))]),
);
