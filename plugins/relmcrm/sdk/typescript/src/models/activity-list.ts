import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "./activity.js";
import { object1Schema, type Object1 } from "./object1.js";

export type ActivityList = {
  object?: Object1;
  hasMore?: boolean;
  nextCursor?: string | null;
  data?: Activity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityListSchema: Schema<ActivityList> = s.object<ActivityList>(
  {
    object: s.optional(s.lazy(() => object1Schema)),
    hasMore: s.optional(s.boolean()),
    nextCursor: s.optionalNullable(s.string()),
    data: s.optional(s.array(s.lazy(() => activitySchema))),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
