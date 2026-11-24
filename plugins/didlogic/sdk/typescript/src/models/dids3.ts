import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requiredDocumentSchema, type RequiredDocument } from "./required-document.js";

export type Dids3 = {
  /** DID identifier */
  id: number;
  /** Country name */
  country: string;
  /** City name */
  city: string;
  /** Whether SMS is available for this number */
  smsEnabled: boolean;
  /** Whether number does not support local caller ID */
  noLocalCli: boolean;
  /** Maximum simultaneous calls */
  channels: number;
  /** Free minutes included per month */
  freeMin: number;
  /** Caller Name (CNAM) support */
  cnam: boolean;
  /** Minimum service term in months */
  commitmentMonths: number;
  /** List of required documents for this number */
  requiredDocuments: RequiredDocument[];
  /** One-time activation fee (USD) */
  activation: number;
  /** Monthly recurring fee (USD) */
  monthly: number;
  /** Per-minute inbound call rate (USD) */
  perMinute: number;
  /** Per-minute origination rate (USD) */
  originationPerMin: Record<string, unknown>;
  /** State name (if applicable) */
  state: string;
  /** ISO country code */
  countryShortName: string;
  /** Phone number */
  number: string;
  /** Whether number has never been sold before (1=yes, 0=no) */
  neverSold: number;
  callRecordingEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dids3Schema: Schema<Dids3> = s.object<Dids3>(
  {
    id: s.int(),
    country: s.string(),
    city: s.string(),
    smsEnabled: s.boolean(),
    noLocalCli: s.boolean(),
    channels: s.int(),
    freeMin: s.int(),
    cnam: s.boolean(),
    commitmentMonths: s.int(),
    requiredDocuments: s.array(s.lazy(() => requiredDocumentSchema)),
    activation: s.float64(),
    monthly: s.float64(),
    perMinute: s.float64(),
    originationPerMin: s.record(s.string(), s.unknown()),
    state: s.string(),
    countryShortName: s.string(),
    number: s.string(),
    neverSold: s.int(),
    callRecordingEnabled: s.boolean(),
    _keysMap: {
      smsEnabled: "sms_enabled",
      noLocalCli: "no_local_cli",
      freeMin: "free_min",
      commitmentMonths: "commitment_months",
      requiredDocuments: "required_documents",
      perMinute: "per_minute",
      originationPerMin: "origination_per_min",
      countryShortName: "country_short_name",
      neverSold: "never_sold",
      callRecordingEnabled: "call_recording_enabled",
    },
  },
  { additionalProperties: s.json() },
);
