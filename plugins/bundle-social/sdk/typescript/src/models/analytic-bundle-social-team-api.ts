import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticBundleSocialTeamApi = {
  id: string;
  count: number;
  bioItemId: string;
  deviceType: Record<string, number>;
  country: Record<string, number>;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticBundleSocialTeamApiSchema: Schema<AnalyticBundleSocialTeamApi> =
  s.object<AnalyticBundleSocialTeamApi>(
    {
      id: s.string(),
      count: s.float64(),
      bioItemId: s.string(),
      deviceType: s.record(s.string(), s.float64()),
      country: s.record(s.string(), s.float64()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
