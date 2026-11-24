import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";
import {
  statusDidlogicComNumbersInventoryApiSchema,
  type StatusDidlogicComNumbersInventoryApi,
} from "./status-didlogic-com-numbers-inventory-api.js";

export type Dids4 = {
  /** Unique DID identifier */
  id: number;
  /** Phone number */
  number: string;
  /** Country name where the number is located */
  country: string;
  /** City or area name */
  area: string;
  /** Number of simultaneous call channels */
  channels: number;
  /** One-time activation fee */
  activation: number;
  /** Monthly recurring fee */
  monthlyFee: number;
  /** Per-minute rate for incoming calls */
  perMinute: number;
  /** List of enabled services (e.g., sms) */
  services: Service[];
  /** Current status of the number */
  status: StatusDidlogicComNumbersInventoryApi;
  /** Number of configured routing destinations */
  destinationCount: number;
  callRecordingEnabled: boolean;
  /** Minimum commitment period in months */
  commitmentMonths: number;
  /** Associated identity/document ID for verification */
  identityId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dids4Schema: Schema<Dids4> = s.object<Dids4>(
  {
    id: s.int(),
    number: s.string(),
    country: s.string(),
    area: s.string(),
    channels: s.int(),
    activation: s.float64(),
    monthlyFee: s.float64(),
    perMinute: s.float64(),
    services: s.array(s.lazy(() => serviceSchema)),
    status: statusDidlogicComNumbersInventoryApiSchema,
    destinationCount: s.int(),
    callRecordingEnabled: s.boolean(),
    commitmentMonths: s.int(),
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
