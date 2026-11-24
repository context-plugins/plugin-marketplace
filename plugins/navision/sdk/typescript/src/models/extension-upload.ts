import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";
import { schemaSyncModeSchema, type SchemaSyncMode } from "./schema-sync-mode.js";

export type ExtensionUpload = {
  systemId?: string;
  /** When to schedule the installation */
  schedule?: Schedule;
  /** Schema synchronization mode */
  schemaSyncMode?: SchemaSyncMode;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extensionUploadSchema: Schema<ExtensionUpload> = s.object<ExtensionUpload>(
  {
    systemId: s.optional(s.string()),
    schedule: s.optional(s.lazy(() => scheduleSchema)),
    schemaSyncMode: s.optional(s.lazy(() => schemaSyncModeSchema)),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
