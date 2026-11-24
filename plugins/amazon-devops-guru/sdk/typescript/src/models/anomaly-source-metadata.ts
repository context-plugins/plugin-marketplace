import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnomalySourceMetadata = {
  /** The source of the anomaly. */
  source?: string;
  /** The name of the anomaly's resource. */
  sourceResourceName?: string;
  /** The anomaly's resource type. */
  sourceResourceType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalySourceMetadataSchema: Schema<AnomalySourceMetadata> = s.object<AnomalySourceMetadata>(
  {
    source: s.optional(s.string()),
    sourceResourceName: s.optional(s.string()),
    sourceResourceType: s.optional(s.string()),
    _keysMap: {
      source: "Source",
      sourceResourceName: "SourceResourceName",
      sourceResourceType: "SourceResourceType",
    },
  },
  { additionalProperties: s.json() },
);
