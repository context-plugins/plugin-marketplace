import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hangupCauseSchema, type HangupCause } from "./hangup-cause.js";
import { typeSchema, type Type } from "./type.js";

export type IncomingCdr = {
  /** Call start time in ISO 8601 format (UTC) */
  timestamp: Date;
  /** Call type */
  type: Type;
  /** Call cost (charged/credited amount) */
  amount: number;
  /** Call duration in seconds. 0 = missed call */
  duration: number;
  /** Caller number/identifier */
  from: string;
  /** Destination number/identifier */
  to: string;
  /**
   * Answering machine detection (AMD) verdict of an outbound call:
   * - `machine` — AMD detected an answering machine
   * - `human` — AMD detected a person
   * - `notsure` — AMD ran but could not tell a machine from a person, for example on silence,
   *   unclear audio or a timeout
   *
   * `null` when no AMD result was recorded for the call, which is always the case for incoming
   * calls.
   */
  amdStatus: string | null;
  /**
   * Probability that an answering machine picked up, as a percentage from 0 to 100, as reported by
   * the AMD detector. It is not a confidence in `amd_status`, and it carries no meaning when
   * `amd_status` is `notsure`. `null` whenever `amd_status` is `null`.
   */
  amdScore: number | null;
  /**
   * How the call ended:
   * - `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values
   * - `NORMAL_CLEARING` — the call was answered
   * - `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer
   * - `BUSY` — the called party was busy
   * - `FAILED` — the call could not be connected
   *
   * `null` for calls made before hangup causes were recorded, for calls whose outcome the platform
   * did not recognise, and for API calls that never reached the destination number.
   */
  hangupCause: HangupCause | null;
  /** DID number that received the call (purchased virtual number) */
  didNumber?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const incomingCdrProperties: s.Shape<IncomingCdr> = {
  timestamp: s.dateTime(),
  type: typeSchema,
  amount: s.float64(),
  duration: s.int(),
  from: s.string(),
  to: s.string(),
  amdStatus: s.nullable(s.string()),
  amdScore: s.nullable(s.int()),
  hangupCause: s.nullable(s.lazy(() => hangupCauseSchema)),
  didNumber: s.optionalNullable(s.string()),
  _keysMap: {
    amdStatus: "amd_status",
    amdScore: "amd_score",
    hangupCause: "hangup_cause",
    didNumber: "did_number",
  },
};

export const incomingCdrInternalSchema: Schema<IncomingCdr> = s.object<IncomingCdr>(incomingCdrProperties, {
  additionalProperties: s.json(),
});

export const incomingCdrSchema: Schema<IncomingCdr> = s.lazySchema(() =>
  s.object<IncomingCdr>(
    {
      ...incomingCdrProperties,
      duration: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
