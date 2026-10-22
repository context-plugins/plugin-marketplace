import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The key used to decrypt the response from the Real-Time Account Updater service. The Account
 * Updater service is used to update card details when cards are lost, stolen or expired. If the
 * field is not set or if it's set to `null`, the Account Updater service doesn't get called. If the
 * field is set, the other `account_updater_*` fields must be set as well.
 */
export type AccountUpdaterResponseDecryptionKey = string;

export const accountUpdaterResponseDecryptionKeySchema: Schema<AccountUpdaterResponseDecryptionKey> =
  s.of<AccountUpdaterResponseDecryptionKey>(s.union([s.string()]));
