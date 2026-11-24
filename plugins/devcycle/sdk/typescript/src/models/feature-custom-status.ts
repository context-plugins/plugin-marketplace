import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureCustomStatus = {
  /** Custom status ID reference */
  status?: string;
  /** Timestamp when the custom status was last updated */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureCustomStatusSchema: Schema<FeatureCustomStatus> = s.object<FeatureCustomStatus>(
  {
    status: s.optional(s.string()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      status: "_status",
    },
  },
  { additionalProperties: s.json() },
);
