import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountUpdaterOptionsSchema, type AccountUpdaterOptions } from "../account-updater-options.js";

/**
 * Custom options to be passed to the `account-updater` connector, allowing for simulating different
 * account updater responses.
 */
export type AccountUpdater = AccountUpdaterOptions;

export const accountUpdaterSchema: Schema<AccountUpdater> = s.of<AccountUpdater>(
  s.union([s.lazy(() => accountUpdaterOptionsSchema)]),
);
