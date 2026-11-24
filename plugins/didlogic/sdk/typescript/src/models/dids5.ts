import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Dids5 = {
  /** DID identifier */
  id: number;
  /** Phone number */
  number: string;
  /** Whether SMS is enabled */
  smsEnabled: boolean;
  /** Whether local caller ID is disabled */
  noLocalCli: boolean;
  /** Maximum simultaneous calls */
  channels: number;
  /** Country name */
  country: string;
  /** City/area name */
  area: string;
  /** Free minutes included per month */
  freeMinutes: number;
  /** Audio codec */
  codec: Record<string, unknown>;
  /**
   * Comma-separated list of required document type IDs: 1 - Personal ID, 2 - Proof of Address, 3 -
   * Proof of Local Address, 4 - Business Registration, 5 - Local Business Registration, 6 - Letter
   * of Intent
   */
  requireDocs: string;
  /** Minimum service term in months */
  commitmentMonths: number;
  /** Whether number has never been sold before (1=yes, 0=no) */
  neverSold: number;
  /** One-time activation fee (USD) */
  activation: number;
  /** Monthly recurring fee (USD) */
  monthlyFee: number;
  /** Per-minute inbound call rate (USD) */
  perMinute: number;
  /** Per-minute origination rate (USD) */
  originationPerMin: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dids5Schema: Schema<Dids5> = s.object<Dids5>(
  {
    id: s.int(),
    number: s.string(),
    smsEnabled: s.boolean(),
    noLocalCli: s.boolean(),
    channels: s.int(),
    country: s.string(),
    area: s.string(),
    freeMinutes: s.int(),
    codec: s.record(s.string(), s.unknown()),
    requireDocs: s.string(),
    commitmentMonths: s.int(),
    neverSold: s.int(),
    activation: s.float64(),
    monthlyFee: s.float64(),
    perMinute: s.float64(),
    originationPerMin: s.float64(),
    _keysMap: {
      smsEnabled: "sms_enabled",
      noLocalCli: "no_local_cli",
      freeMinutes: "free_minutes",
      requireDocs: "require_docs",
      commitmentMonths: "commitment_months",
      neverSold: "never_sold",
      monthlyFee: "monthly_fee",
      perMinute: "per_minute",
      originationPerMin: "origination_per_min",
    },
  },
  { additionalProperties: s.json() },
);
