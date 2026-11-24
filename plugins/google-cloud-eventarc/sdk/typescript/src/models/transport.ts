import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pubsub1Schema, type Pubsub1 } from "./pubsub1.js";

/** Represents the transport intermediaries created for the trigger to deliver events. */
export type Transport = {
  /** The Pub/Sub topic and subscription used by Eventarc as a transport intermediary. */
  pubsub?: Pubsub1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transportSchema: Schema<Transport> = s.object<Transport>(
  {
    pubsub: s.optional(s.lazy(() => pubsub1Schema)),
  },
  { additionalProperties: s.json() },
);
