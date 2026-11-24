import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  analyticBundleSocialTeamApiSchema,
  type AnalyticBundleSocialTeamApi,
} from "./analytic-bundle-social-team-api.js";

export type ItemBundleSocialTeamApi = {
  id: string;
  bioId: string;
  name: string;
  link: string;
  icon?: string | null;
  enabled: boolean;
  order?: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  analytics: AnalyticBundleSocialTeamApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemBundleSocialTeamApiSchema: Schema<ItemBundleSocialTeamApi> =
  s.object<ItemBundleSocialTeamApi>(
    {
      id: s.string(),
      bioId: s.string(),
      name: s.string(),
      link: s.string(),
      icon: s.optionalNullable(s.string()),
      enabled: s.boolean(),
      order: s.optionalNullable(s.float64()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      analytics: s.array(s.lazy(() => analyticBundleSocialTeamApiSchema)),
    },
    { additionalProperties: s.json() },
  );
