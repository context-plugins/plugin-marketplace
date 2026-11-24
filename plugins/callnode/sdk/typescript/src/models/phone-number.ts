import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messagingInternalSchema, messagingSchema, type Messaging } from "./messaging.js";
import { purchaseSourceSchema, type PurchaseSource } from "./purchase-source.js";
import { type3Schema, type Type3 } from "./type3.js";
import { voiceInternalSchema, voiceSchema, type Voice } from "./voice.js";

export type PhoneNumber = {
  id?: string;
  /** Plus sign followed by 7–15 digits. */
  phoneNumber?: string;
  type?: Type3;
  friendlyName?: string | null;
  status?: string;
  /** How the number was purchased — via the dashboard (`web`) or this API (`api`). */
  purchaseSource?: PurchaseSource;
  /**
   * Your own labels for the number. Trimmed, de-duplicated case-insensitively, returned on every
   * number, filterable on the dashboard. PATCH replaces the whole list; send [] to clear.
   */
  tags?: string[];
  voice?: Voice;
  messaging?: Messaging;
  monthlyRate?: number;
  perMinuteRate?: number;
  includedInSubscription?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const phoneNumberProperties: s.Shape<PhoneNumber> = {
  id: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  type: s.optional(s.lazy(() => type3Schema)),
  friendlyName: s.optionalNullable(s.string()),
  status: s.optional(s.string()),
  purchaseSource: s.optional(s.lazy(() => purchaseSourceSchema)),
  tags: s.optional(s.array(s.string())),
  voice: s.optional(s.lazy(() => voiceInternalSchema)),
  messaging: s.optional(s.lazy(() => messagingInternalSchema)),
  monthlyRate: s.optional(s.float64()),
  perMinuteRate: s.optional(s.float64()),
  includedInSubscription: s.optional(s.boolean()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
};

export const phoneNumberInternalSchema: Schema<PhoneNumber> = s.object<PhoneNumber>(phoneNumberProperties, {
  additionalProperties: s.json(),
});

export const phoneNumberSchema: Schema<PhoneNumber> = s.lazySchema(() =>
  s.object<PhoneNumber>(
    {
      ...phoneNumberProperties,
      phoneNumber: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
      tags: s.optional(
        s
          .array(
            s.string().check(s.minLength(1), s.maxLength(24), s.pattern("^[A-Za-z0-9][A-Za-z0-9 ._-]*$")),
          )
          .check(s.maxLength(10)),
      ),
      voice: s.optional(s.lazy(() => voiceSchema)),
      messaging: s.optional(s.lazy(() => messagingSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
