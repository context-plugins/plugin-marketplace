import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDidlogicComSmsApiSchema,
  type StatusDidlogicComSmsApi,
} from "./status-didlogic-com-sms-api.js";

/** Created SMS details */
export type Sms = {
  /** SMS ID */
  id: number;
  /** Destination number */
  destination: string;
  /** Message content */
  message: string;
  /** Delivery status */
  status: StatusDidlogicComSmsApi;
  /** SMS cost */
  charge: number;
  /** Number of segments */
  segmentsCount: number;
  /**
   * Why the SMS failed, as an SMPP command_status; `null` unless `status` is `failed`. A failure
   * with no more specific code reads `255`.
   * - `10` (`ESME_RINVSRCADR`) — Invalid sender ID: the sender ID is not accepted for this
   *   destination
   * - `11` (`ESME_RINVDSTADR`) — Invalid destination number: the destination number is not valid
   * - `69` (`ESME_RSUBMITFAIL`) — Submit failed: the message was rejected and not delivered
   * - `255` (`ESME_RUNKNOWNERR`) — Unknown error: the message failed for any other reason
   */
  errorCode: number | null;
  /**
   * The text for `error_code` ("Invalid sender ID", "Invalid destination number", "Submit failed",
   * "Unknown error"); `null` unless `status` is `failed`.
   */
  errorDescription: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const smsSchema: Schema<Sms> = s.object<Sms>(
  {
    id: s.int(),
    destination: s.string(),
    message: s.string(),
    status: statusDidlogicComSmsApiSchema,
    charge: s.float64(),
    segmentsCount: s.int(),
    errorCode: s.nullable(s.int()),
    errorDescription: s.nullable(s.string()),
    _keysMap: {
      segmentsCount: "segments_count",
      errorCode: "error_code",
      errorDescription: "error_description",
    },
  },
  { additionalProperties: s.json() },
);
