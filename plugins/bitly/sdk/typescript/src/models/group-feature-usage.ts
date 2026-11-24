import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  groupConsumableFeatureUsageSchema,
  type GroupConsumableFeatureUsage,
} from "./group-consumable-feature-usage.js";

export type GroupFeatureUsage = {
  /** the group's guid */
  groupGuid: string;
  /** an array of all of the group's consumable feature usage */
  limitUsage: GroupConsumableFeatureUsage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupFeatureUsageSchema: Schema<GroupFeatureUsage> = s.object<GroupFeatureUsage>(
  {
    groupGuid: s.string(),
    limitUsage: s.array(s.lazy(() => groupConsumableFeatureUsageSchema)),
    _keysMap: {
      groupGuid: "group_guid",
      limitUsage: "limit_usage",
    },
  },
  { additionalProperties: s.json() },
);
