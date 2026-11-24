import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";
import { status2Schema, type Status2 } from "./status2.js";

export type Log = {
  /** Log identifier */
  id: number;
  /** Phone number that was checked */
  number: string;
  /** Lookup status */
  status: Status2;
  /** Line type (e.g. mobile, fixed) */
  phoneType: string;
  /** Carrier / operator name */
  carrier: string;
  /** Mobile Country Code */
  mcc: string;
  /** Mobile Network Code */
  mnc: string;
  /** Whether the number was ported */
  ported: boolean;
  /** Whether the destination is flagged risky */
  risky: boolean;
  /** Country */
  country: string;
  /** Parent task identifier */
  taskId: number;
  /** Processing completion timestamp */
  processedAt: string;
  /** Log creation timestamp */
  createdAt: string;
  /** Whether the number is valid */
  valid: boolean;
  /** Client price charged for this lookup (USD) */
  price: string;
  /**
   * Normalized lookup error code: 000 — OK, 113 — Internal service error, 121 — Invalid phone
   * number length or format, 199 — Unexpected error. null when no result is available yet.
   */
  errorCode: ErrorCode | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logSchema: Schema<Log> = s.object<Log>(
  {
    id: s.int(),
    number: s.string(),
    status: status2Schema,
    phoneType: s.string(),
    carrier: s.string(),
    mcc: s.string(),
    mnc: s.string(),
    ported: s.boolean(),
    risky: s.boolean(),
    country: s.string(),
    taskId: s.int(),
    processedAt: s.string(),
    createdAt: s.string(),
    valid: s.boolean(),
    price: s.string(),
    errorCode: s.nullable(s.lazy(() => errorCodeSchema)),
    _keysMap: {
      phoneType: "phone_type",
      taskId: "task_id",
      processedAt: "processed_at",
      createdAt: "created_at",
      errorCode: "error_code",
    },
  },
  { additionalProperties: s.json() },
);
