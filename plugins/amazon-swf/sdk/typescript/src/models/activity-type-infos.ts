import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityTypeInfoSchema, type ActivityTypeInfo } from "./activity-type-info.js";

export type ActivityTypeInfos = {
  /** List of activity type information. */
  typeInfos: ActivityTypeInfo[];
  /**
   * If a NextPageToken was returned by a previous call, there are more results available. To
   * retrieve the next page of results, make the call again using the returned token in
   * nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines
   * how many results can be returned in a single call.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTypeInfosSchema: Schema<ActivityTypeInfos> = s.object<ActivityTypeInfos>(
  {
    typeInfos: s.array(s.lazy(() => activityTypeInfoSchema)),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
