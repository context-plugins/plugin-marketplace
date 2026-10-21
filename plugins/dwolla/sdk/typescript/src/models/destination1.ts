import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** RTP destination details with network identifiers */
export type Destination1 = {
  /** Remittance information included in the transfer request */
  remittanceData?: string;
  /** Unique identifier for the transfer within the RTP network */
  networkId?: string;
  /** End-to-end reference identifier for the RTP transfer */
  endToEndReferenceId?: string;
};

export const destination1Schema: Schema<Destination1> = s.object<Destination1>({
  remittanceData: s.optional(s.string()),
  networkId: s.optional(s.string()),
  endToEndReferenceId: s.optional(s.string()),
});
