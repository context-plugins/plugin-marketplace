import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MutualFundSipData = {
  /** Display name of the fund. */
  fund?: string;
  /** ACTIVE, PAUSED, or CANCELLED. */
  status?: string;
  /** Timestamp when the SIP was registered. */
  created?: string;
  /** Frequency (e.g. monthly, weekly). */
  frequency?: string;
  /** Total number of instalments when applicable; -1 if open-ended. */
  instalments?: number;
  /** Unique SIP identifier. */
  sipId?: string;
  /** SIP registration number when available. */
  sipRegNumber?: string;
  /** ISIN of the fund, when available. */
  instrumentKey?: string;
  /** Dividend option when available (e.g. growth, idcw). */
  dividendType?: string;
  /** BUY or SELL. */
  transactionType?: string;
  /** Next instalment date. */
  nextInstalment?: string;
  /** Amount per instalment. */
  instalmentAmount?: number;
  /** Last triggered instalment timestamp. */
  lastInstalment?: string;
  /** Pending instalments when applicable. */
  pendingInstalments?: number;
  /** Day of month for monthly SIPs when applicable. */
  instalmentDay?: number;
  /** Completed instalment count when available. */
  completedInstalments?: number;
  /** Trigger price when applicable. */
  triggerPrice?: number;
  /** SIP channel/type (e.g. sip, amc_sip). */
  sipType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mutualFundSipDataSchema: Schema<MutualFundSipData> = s.object<MutualFundSipData>(
  {
    fund: s.optional(s.string()),
    status: s.optional(s.string()),
    created: s.optional(s.string()),
    frequency: s.optional(s.string()),
    instalments: s.optional(s.int()),
    sipId: s.optional(s.string()),
    sipRegNumber: s.optional(s.string()),
    instrumentKey: s.optional(s.string()),
    dividendType: s.optional(s.string()),
    transactionType: s.optional(s.string()),
    nextInstalment: s.optional(s.string()),
    instalmentAmount: s.optional(s.float64()),
    lastInstalment: s.optional(s.string()),
    pendingInstalments: s.optional(s.int()),
    instalmentDay: s.optional(s.int()),
    completedInstalments: s.optional(s.int()),
    triggerPrice: s.optional(s.float64()),
    sipType: s.optional(s.string()),
    _keysMap: {
      sipId: "sip_id",
      sipRegNumber: "sip_reg_number",
      instrumentKey: "instrument_key",
      dividendType: "dividend_type",
      transactionType: "transaction_type",
      nextInstalment: "next_instalment",
      instalmentAmount: "instalment_amount",
      lastInstalment: "last_instalment",
      pendingInstalments: "pending_instalments",
      instalmentDay: "instalment_day",
      completedInstalments: "completed_instalments",
      triggerPrice: "trigger_price",
      sipType: "sip_type",
    },
  },
  { additionalProperties: s.json() },
);
