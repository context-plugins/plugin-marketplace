import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Instant payment details for the destination */
export type Destination9 = {
  /**
   * Remittance information for Instant Payments (RTP/FedNow), providing context about the payment
   * purpose. Acceptable characters: alphanumeric (0-9, a-z, A-Z), space, and special characters
   * (#,.'&/-@!$%*()_+={}|:;`[]^~\")
   */
  remittanceData?: string;
};

export const destination9Schema: Schema<Destination9> = s.object<Destination9>({
  remittanceData: s.optional(s.string()),
});
