import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BackupResponse = {
  /** Date and time of the backup version */
  version: string;
  /** Backup URL */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backupResponseSchema: Schema<BackupResponse> = s.object<BackupResponse>(
  {
    version: s.string(),
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
