import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrackingFeatureState = {
  id: string;
  label: string;
  enabled: boolean;
  /** Always collected; cannot be turned off. */
  locked: boolean;
  default: boolean;
  /** Feature ids that must also be enabled. */
  requires?: string[];
  /** Marginal cost in bytes, brotli-compressed. */
  sizeBr: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trackingFeatureStateSchema: Schema<TrackingFeatureState> = s.object<TrackingFeatureState>(
  {
    id: s.string(),
    label: s.string(),
    enabled: s.boolean(),
    locked: s.boolean(),
    default: s.boolean(),
    requires: s.optional(s.array(s.string())),
    sizeBr: s.int(),
    _keysMap: {
      sizeBr: "size_br",
    },
  },
  { additionalProperties: s.json() },
);
