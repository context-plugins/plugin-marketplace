import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { trackingFeatureStateSchema, type TrackingFeatureState } from "./tracking-feature-state.js";

export type TrackingSettings = {
  siteId: number;
  /** Catalogue version. */
  version: number;
  /** The build actually served for this site. */
  bundle: string;
  enabled: string[];
  features: TrackingFeatureState[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trackingSettingsSchema: Schema<TrackingSettings> = s.object<TrackingSettings>(
  {
    siteId: s.int(),
    version: s.int(),
    bundle: s.string(),
    enabled: s.array(s.string()),
    features: s.array(s.lazy(() => trackingFeatureStateSchema)),
    _keysMap: {
      siteId: "site_id",
    },
  },
  { additionalProperties: s.json() },
);
