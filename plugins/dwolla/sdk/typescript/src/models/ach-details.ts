import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";
import { sourceSchema, type Source } from "./source.js";

/** ACH-specific details for the transfer. Present when transfer was processed via ACH network. */
export type AchDetails = {
  /** Information sent to the source/originating bank account along with the transfer */
  source?: Source;
  /** Information sent to the destination/receiving bank account along with the transfer */
  destination?: Destination;
};

export const achDetailsSchema: Schema<AchDetails> = s.object<AchDetails>({
  source: s.optional(s.lazy(() => sourceSchema)),
  destination: s.optional(s.lazy(() => destinationSchema)),
});
