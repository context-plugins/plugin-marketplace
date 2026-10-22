import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination2Schema, type Destination2 } from "./destination2.js";

/**
 * FedNow Service network specific details. Present when transfer was processed via FedNow network.
 */
export type FedNowDetails = {
  /** FedNow destination details with network identifiers */
  destination?: Destination2;
};

export const fedNowDetailsSchema: Schema<FedNowDetails> = s.object<FedNowDetails>({
  destination: s.optional(s.lazy(() => destination2Schema)),
});
