import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KinesisVideoStreamStartSelector = {
  /**
   * The timestamp from the producer corresponding to the fragment, in milliseconds, expressed in
   * unix time format.
   */
  producerTimestamp?: number;
  /**
   * The unique identifier of the fragment. This value monotonically increases based on the
   * ingestion order.
   */
  fragmentNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kinesisVideoStreamStartSelectorSchema: Schema<KinesisVideoStreamStartSelector> =
  s.object<KinesisVideoStreamStartSelector>(
    {
      producerTimestamp: s.optional(s.int()),
      fragmentNumber: s.optional(s.string()),
      _keysMap: {
        producerTimestamp: "ProducerTimestamp",
        fragmentNumber: "FragmentNumber",
      },
    },
    { additionalProperties: s.json() },
  );
