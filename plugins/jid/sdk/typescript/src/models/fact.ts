import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { confidenceSchema, type Confidence } from "./confidence.js";
import { sourceSchema, type Source } from "./source.js";

export type Fact = {
  predicate?: string;
  label?: string;
  value?: Record<string, unknown>;
  source?: Source;
  sourceUrl?: string | null;
  observedAt?: string | null;
  verifiedAt?: Date;
  nextCheckAt?: Date;
  confidence?: Confidence;
  snapshotSha256?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const factSchema: Schema<Fact> = s.object<Fact>(
  {
    predicate: s.optional(s.string()),
    label: s.optional(s.string()),
    value: s.optional(s.record(s.string(), s.unknown())),
    source: s.optional(s.lazy(() => sourceSchema)),
    sourceUrl: s.optionalNullable(s.string()),
    observedAt: s.optionalNullable(s.string()),
    verifiedAt: s.optional(s.dateTime()),
    nextCheckAt: s.optional(s.dateTime()),
    confidence: s.optional(s.lazy(() => confidenceSchema)),
    snapshotSha256: s.optionalNullable(s.string()),
    _keysMap: {
      sourceUrl: "source_url",
      observedAt: "observed_at",
      verifiedAt: "verified_at",
      nextCheckAt: "next_check_at",
      snapshotSha256: "snapshot_sha256",
    },
  },
  { additionalProperties: s.json() },
);
