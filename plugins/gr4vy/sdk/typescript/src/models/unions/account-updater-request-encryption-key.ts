import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The public key used to encrypt the request to the Real-Time Account Updater service. The Account
 * Updater service is used to update card details when cards are lost, stolen or expired. If the
 * field is not set or if it's set to `null`, the Account Updater service doesn't get called. If the
 * field is set, the other `account_updater_*` fields must be set as well.
 */
export type AccountUpdaterRequestEncryptionKey = string;

export const accountUpdaterRequestEncryptionKeySchema: Schema<AccountUpdaterRequestEncryptionKey> =
  s.of<AccountUpdaterRequestEncryptionKey>(s.union([s.string()]));
