import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { backupsSettingsSchema, type BackupsSettings } from "../backups-settings.js";

/** Configuration backup settings, including storage location and retention period. */
export type BackupsSettings1 = BackupsSettings | Record<string, unknown>;

export const backupsSettings1Schema: Schema<BackupsSettings1> = s.of<BackupsSettings1>(
  s.union([s.lazy(() => backupsSettingsSchema), s.record(s.string(), s.unknown())]),
);
