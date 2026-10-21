import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination1Schema, type Destination1 } from "./destination1.js";

/**
 * Real-Time Payments (RTP) network specific details. Present when transfer was processed via RTP
 * network.
 */
export type RtpDetails = {
  /** RTP destination details with network identifiers */
  destination?: Destination1;
};

export const rtpDetailsSchema: Schema<RtpDetails> = s.object<RtpDetails>({
  destination: s.optional(s.lazy(() => destination1Schema)),
});
