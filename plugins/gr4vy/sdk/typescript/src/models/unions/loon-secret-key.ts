import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Secret key provided by Pagos to authenticate to the Loon API. Loon is the Account Updater service
 * we use and if the field is not set or if it's set to null, the Account Updater service doesn't
 * get configured. If the field is set to `null`, the other `loon_*` fields must be set to null as
 * well.
 */
export type LoonSecretKey = string;

export const loonSecretKeySchema: Schema<LoonSecretKey> = s.of<LoonSecretKey>(s.union([s.string()]));
