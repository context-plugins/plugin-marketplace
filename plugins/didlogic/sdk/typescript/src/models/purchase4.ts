import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1DidlogicComNumbersInventoryApiSchema,
  type Status1DidlogicComNumbersInventoryApi,
} from "./status1-didlogic-com-numbers-inventory-api.js";

/** Updated purchase details */
export type Purchase4 = {
  /** DID identifier */
  id: number;
  /** Phone number */
  number: string;
  /** Country name */
  country: string;
  /** City/area name */
  area: string;
  /** Maximum simultaneous calls */
  channels: number;
  /** One-time activation fee (USD) */
  activation: number;
  /** Monthly recurring fee (USD) */
  monthlyFee: number;
  /** Per-minute inbound call rate (USD) */
  perMinute: number;
  /** Enabled services for this number */
  services: Record<string, unknown>[];
  /** Number status */
  status: Status1DidlogicComNumbersInventoryApi;
  /** Number of configured routing destinations */
  destinationCount: number;
  /** Whether inbound call recording is enabled for this DID */
  callRecordingEnabled: boolean;
  /** Minimum service term in months (omitted when the commitment policy is disabled) */
  commitmentMonths?: number;
  /** Associated identity ID */
  identityId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const purchase4Schema: Schema<Purchase4> = s.object<Purchase4>(
  {
    id: s.int(),
    number: s.string(),
    country: s.string(),
    area: s.string(),
    channels: s.int(),
    activation: s.float64(),
    monthlyFee: s.float64(),
    perMinute: s.float64(),
    services: s.array(s.record(s.string(), s.unknown())),
    status: status1DidlogicComNumbersInventoryApiSchema,
    destinationCount: s.int(),
    callRecordingEnabled: s.boolean(),
    commitmentMonths: s.optional(s.int()),
    identityId: s.int(),
    _keysMap: {
      monthlyFee: "monthly_fee",
      perMinute: "per_minute",
      destinationCount: "destination_count",
      callRecordingEnabled: "call_recording_enabled",
      commitmentMonths: "commitment_months",
      identityId: "identity_id",
    },
  },
  { additionalProperties: s.json() },
);
