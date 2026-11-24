import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transfer1 = {
  /** Linked Account ID (acc_*). */
  account: string;
  /** Amount in paise. Minimum 10000. */
  amount: number;
  /** @default "INR" */
  currency?: "INR";
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  linkedAccountNotes?: string[];
  onHold?: boolean;
  onHoldUntil?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transfer1Properties: s.Shape<Transfer1> = {
  account: s.string(),
  amount: s.int(),
  currency: s.defaulted(s.literal("INR"), "INR"),
  notes: s.optional(s.record(s.string(), s.string())),
  linkedAccountNotes: s.optional(s.array(s.string())),
  onHold: s.optional(s.boolean()),
  onHoldUntil: s.optional(s.int()),
  _keysMap: {
    linkedAccountNotes: "linked_account_notes",
    onHold: "on_hold",
    onHoldUntil: "on_hold_until",
  },
};

export const transfer1InternalSchema: Schema<Transfer1> = s.object<Transfer1>(transfer1Properties, {
  additionalProperties: s.json(),
});

export const transfer1Schema: Schema<Transfer1> = s.lazySchema(() =>
  s.object<Transfer1>(
    {
      ...transfer1Properties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
