import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single batch item that failed validation before processing began. */
export type InvalidHandshakeItem = {
  /** Zero-based position of the invalid item within the submitted batch. */
  index: number;
  /** Present when the invalid item is a reseller-handshake batch item. */
  resellerCustomerId?: string;
  /** Stable machine-readable error code (e.g. `duplicate_pma`, `duplicate_ec_account`). */
  code: string;
  /** Human-readable explanation of why the item is invalid. */
  reason?: string;
};

export const invalidHandshakeItemSchema: Schema<InvalidHandshakeItem> = s.object<InvalidHandshakeItem>({
  index: s.int(),
  resellerCustomerId: s.optional(s.string()),
  code: s.string(),
  reason: s.optional(s.string()),
});
