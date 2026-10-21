import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { rollbackSettingsSchema, type RollbackSettings } from "../rollback-settings.js";

export type RollbackSettings11 = RollbackSettings | Record<string, unknown>;

export const rollbackSettings11Schema: Schema<RollbackSettings11> = s.of<RollbackSettings11>(
  s.union([s.lazy(() => rollbackSettingsSchema), s.record(s.string(), s.unknown())]),
);
