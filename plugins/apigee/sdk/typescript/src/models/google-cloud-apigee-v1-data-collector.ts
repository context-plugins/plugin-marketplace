import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type4Schema, type Type4 } from "./type4.js";

/** Data collector configuration. */
export type GoogleCloudApigeeV1DataCollector = {
  /** Immutable. The type of data this data collector will collect. */
  type?: Type4;
  /** A description of the data collector. */
  description?: string;
  /**
   * Output only. The time at which the data collector was created in milliseconds since the epoch.
   */
  createdAt?: string;
  /**
   * Output only. The time at which the Data Collector was last updated in milliseconds since the
   * epoch.
   */
  lastModifiedAt?: string;
  /** ID of the data collector. Must begin with `dc_`. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DataCollectorSchema: Schema<GoogleCloudApigeeV1DataCollector> =
  s.object<GoogleCloudApigeeV1DataCollector>(
    {
      type: s.optional(s.lazy(() => type4Schema)),
      description: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
