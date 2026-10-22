import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** FedNow destination details with network identifiers */
export type Destination2 = {
  /** Remittance information included in the transfer request */
  remittanceData?: string;
  /** Unique identifier for the transfer within the FedNow network */
  networkId?: string;
  /** End-to-end reference identifier for the FedNow transfer */
  endToEndReferenceId?: string;
};

export const destination2Schema: Schema<Destination2> = s.object<Destination2>({
  remittanceData: s.optional(s.string()),
  networkId: s.optional(s.string()),
  endToEndReferenceId: s.optional(s.string()),
});
