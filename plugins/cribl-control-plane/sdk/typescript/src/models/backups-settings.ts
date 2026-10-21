import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BackupsSettings = {
  /** How long to retain backups. Value is a duration string such as <code>24h</code>. */
  backupPersistence: string;
  /** Filesystem path where configuration backups are stored. */
  backupsDirectory: string;
};

export const backupsSettingsSchema: Schema<BackupsSettings> = s.object<BackupsSettings>({
  backupPersistence: s.string(),
  backupsDirectory: s.string(),
});
