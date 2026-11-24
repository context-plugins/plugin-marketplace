import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";

/** Data collector and its configuration. */
export type GoogleCloudApigeeV1DataCollectorConfig = {
  /**
   * Name of the data collector in the following format:
   * `organizations/{org}/datacollectors/{datacollector}`
   */
  name?: string;
  /** Data type accepted by the data collector. */
  type?: Type5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DataCollectorConfigSchema: Schema<GoogleCloudApigeeV1DataCollectorConfig> =
  s.object<GoogleCloudApigeeV1DataCollectorConfig>(
    {
      name: s.optional(s.string()),
      type: s.optional(s.lazy(() => type5Schema)),
    },
    { additionalProperties: s.json() },
  );
