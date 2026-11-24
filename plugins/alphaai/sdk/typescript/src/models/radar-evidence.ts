import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RadarEvidence = {
  uid: string;
  title: string;
  url: string;
  sourceDomain: string;
  timePublished: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarEvidenceSchema: Schema<RadarEvidence> = s.object<RadarEvidence>(
  {
    uid: s.string(),
    title: s.string(),
    url: s.string(),
    sourceDomain: s.string(),
    timePublished: s.dateTime(),
    _keysMap: {
      sourceDomain: "source_domain",
      timePublished: "time_published",
    },
  },
  { additionalProperties: s.json() },
);
