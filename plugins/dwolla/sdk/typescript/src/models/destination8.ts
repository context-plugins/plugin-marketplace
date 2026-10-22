import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** RTP details for the destination */
export type Destination8 = {
  /**
   * Remittance information for Real-Time Payments, providing context about the payment purpose.
   * Acceptable characters: alphanumeric (0-9, a-z, A-Z), space, and special characters
   * (#,.'&/-@!$%*()_+={}|:;`[]^~\")
   */
  remittanceData?: string;
};

export const destination8Schema: Schema<Destination8> = s.object<Destination8>({
  remittanceData: s.optional(s.string()),
});
