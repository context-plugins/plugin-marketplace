import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pubsub1Schema, type Pubsub1 } from "./pubsub1.js";

/**
 * Optional. To deliver messages, Eventarc might use other Google Cloud products as a transport
 * intermediary. This field contains a reference to that transport intermediary. This information
 * can be used for debugging purposes.
 */
export type Transport2 = {
  /** The Pub/Sub topic and subscription used by Eventarc as a transport intermediary. */
  pubsub?: Pubsub1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transport2Schema: Schema<Transport2> = s.object<Transport2>(
  {
    pubsub: s.optional(s.lazy(() => pubsub1Schema)),
  },
  { additionalProperties: s.json() },
);
