import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callStatusSchema, type CallStatus } from "./call-status.js";

export type Call = {
  callId?: string;
  status?: CallStatus;
  /** Plus sign followed by 7–15 digits. */
  from?: string;
  /** The destination as requested — an E.164 number, a `sip:` URI, or an extension (trunk form). */
  to?: string;
  createdAt?: Date;
  originatedAt?: Date | null;
  answeredAt?: Date | null;
  endedAt?: Date | null;
  durationSecs?: number | null;
  /** Decimal string, e.g. "0.04". */
  costUsd?: string | null;
  /**
   * Why the call failed. `no_answer`, `busy`, `carrier_rejected`, `invalid_number`, `cancelled`,
   * `max_duration_exceeded`, or — for SIP destinations — `invalid_destination`,
   * `endpoint_unreachable`, `endpoint_rejected`.
   */
  failureCode?: string | null;
  /** The trunk used for this call. Null for PSTN calls and direct-URI SIP calls. */
  sipTrunkId?: string | null;
  /** The normalized SIP URI actually dialed. Null for PSTN calls. */
  sipUri?: string | null;
  /**
   * True when the call was placed outside the 8am–9pm window to a number in the account's Phone
   * Book, so no tcpaOverride was needed.
   */
  phoneBookExempt?: boolean;
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const callProperties: s.Shape<Call> = {
  callId: s.optional(s.string()),
  status: s.optional(s.lazy(() => callStatusSchema)),
  from: s.optional(s.string()),
  to: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  originatedAt: s.optionalNullable(s.dateTime()),
  answeredAt: s.optionalNullable(s.dateTime()),
  endedAt: s.optionalNullable(s.dateTime()),
  durationSecs: s.optionalNullable(s.int()),
  costUsd: s.optionalNullable(s.string()),
  failureCode: s.optionalNullable(s.string()),
  sipTrunkId: s.optionalNullable(s.string()),
  sipUri: s.optionalNullable(s.string()),
  phoneBookExempt: s.optional(s.boolean()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
};

export const callInternalSchema: Schema<Call> = s.object<Call>(callProperties, {
  additionalProperties: s.json(),
});

export const callSchema: Schema<Call> = s.lazySchema(() =>
  s.object<Call>(
    {
      ...callProperties,
      from: s.optional(s.string().check(s.pattern("^\\+[1-9]\\d{6,14}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
