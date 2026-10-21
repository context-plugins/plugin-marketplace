import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { backupsSettingsSchema, type BackupsSettings } from "../backups-settings.js";

export type BackupsSettings11 = BackupsSettings | Record<string, unknown>;

export const backupsSettings11Schema: Schema<BackupsSettings11> = s.of<BackupsSettings11>(
  s.union([s.lazy(() => backupsSettingsSchema), s.record(s.string(), s.unknown())]),
);
