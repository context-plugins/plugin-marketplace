import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThreatSource = {
  source?: string;
  indicator?: string;
  threatType?: string;
  confidence?: number;
  firstSeen?: string;
  lastSeen?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threatSourceSchema: Schema<ThreatSource> = s.object<ThreatSource>(
  {
    source: s.optional(s.string()),
    indicator: s.optional(s.string()),
    threatType: s.optional(s.string()),
    confidence: s.optional(s.float64()),
    firstSeen: s.optional(s.string()),
    lastSeen: s.optional(s.string()),
    _keysMap: {
      threatType: "threat_type",
      firstSeen: "first_seen",
      lastSeen: "last_seen",
    },
  },
  { additionalProperties: s.json() },
);
