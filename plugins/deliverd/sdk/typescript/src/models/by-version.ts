import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ByVersion = {
  versionNumber: number;
  views: number;
  uniqueViewers: number;
  lastViewedAt: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byVersionSchema: Schema<ByVersion> = s.object<ByVersion>(
  {
    versionNumber: s.float64(),
    views: s.float64(),
    uniqueViewers: s.float64(),
    lastViewedAt: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
