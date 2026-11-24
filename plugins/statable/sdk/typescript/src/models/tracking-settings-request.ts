import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrackingSettingsRequest = {
  /**
   * The complete desired selection. Send [] to keep only the locked defaults. Omitting the key is
   * an error, not "unchanged".
   */
  features: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trackingSettingsRequestSchema: Schema<TrackingSettingsRequest> =
  s.object<TrackingSettingsRequest>(
    {
      features: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
