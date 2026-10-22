import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Expiry of the Google Pay token the PAN was decrypted from, as milliseconds since the epoch. */
export type MessageExpiration = string;

export const messageExpirationSchema: Schema<MessageExpiration> = s.of<MessageExpiration>(
  s.union([s.string()]),
);
