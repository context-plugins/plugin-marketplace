import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { rollbackSettingsSchema, type RollbackSettings } from "../rollback-settings.js";

/** Automatic rollback settings applied when an upgrade fails. */
export type RollbackSettings1 = RollbackSettings | Record<string, unknown>;

export const rollbackSettings1Schema: Schema<RollbackSettings1> = s.of<RollbackSettings1>(
  s.union([s.lazy(() => rollbackSettingsSchema), s.record(s.string(), s.unknown())]),
);
