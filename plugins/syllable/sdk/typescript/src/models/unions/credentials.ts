import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Exposed credentials for the channel - currently just account_sid_last_four for Twilio channels
 */
export type Credentials = Record<string, string>;

export const credentialsSchema: Schema<Credentials> = s.of<Credentials>(
  s.union([s.record(s.string(), s.string())]),
);
