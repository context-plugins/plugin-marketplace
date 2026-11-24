import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directionSchema, type Direction } from "./direction.js";
import { statusSchema, type Status } from "./status.js";

/** A finished or in-progress call on one of your numbers. */
export type CallRecord = {
  /** The call's uuid — matches `X-CallNode-Call-Id` on BYOC INVITEs. */
  callId?: string;
  direction?: Direction;
  from?: string;
  to?: string;
  /** The CallNode number (E.164) the record belongs to. */
  number?: string;
  status?: Status;
  startTime?: Date;
  endTime?: Date | null;
  durationSecs?: number;
  /** CallNode's reason the call ended. Null = ordinary hangup. */
  endReason?: string | null;
  /** SIP-level hangup cause of the caller leg (e.g. NORMAL_CLEARING). */
  sipCause?: string | null;
  errorMessage?: string | null;
  webhookErrors?: number;
  /** Set when the call arrived over one of your SIP trunks. */
  sipTrunkId?: string | null;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callRecordSchema: Schema<CallRecord> = s.object<CallRecord>(
  {
    callId: s.optional(s.string()),
    direction: s.optional(s.lazy(() => directionSchema)),
    from: s.optional(s.string()),
    to: s.optional(s.string()),
    number: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    startTime: s.optional(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    durationSecs: s.optional(s.int()),
    endReason: s.optionalNullable(s.string()),
    sipCause: s.optionalNullable(s.string()),
    errorMessage: s.optionalNullable(s.string()),
    webhookErrors: s.optional(s.int()),
    sipTrunkId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
