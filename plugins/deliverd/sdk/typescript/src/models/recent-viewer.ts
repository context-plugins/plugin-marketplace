import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecentViewer = {
  displayName: string;
  principalType: string;
  viewCount: number;
  lastViewedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recentViewerSchema: Schema<RecentViewer> = s.object<RecentViewer>(
  {
    displayName: s.string(),
    principalType: s.string(),
    viewCount: s.float64(),
    lastViewedAt: s.string(),
  },
  { additionalProperties: s.json() },
);
