import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination8Schema, type Destination8 } from "./destination8.js";

/** Real-Time Payments (RTP) specific transaction details. */
export type RtpDetails1 = {
  /** RTP details for the destination */
  destination?: Destination8;
};

export const rtpDetails1Schema: Schema<RtpDetails1> = s.object<RtpDetails1>({
  destination: s.optional(s.lazy(() => destination8Schema)),
});
