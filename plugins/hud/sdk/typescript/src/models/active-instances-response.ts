import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeInstanceSchema, type ActiveInstance } from "./active-instance.js";

export type ActiveInstancesResponse = {
  instances: ActiveInstance[];
  total: number;
  runningCount: number;
  terminatedCount: number;
  hasMore: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeInstancesResponseSchema: Schema<ActiveInstancesResponse> =
  s.object<ActiveInstancesResponse>(
    {
      instances: s.array(s.lazy(() => activeInstanceSchema)),
      total: s.int(),
      runningCount: s.int(),
      terminatedCount: s.int(),
      hasMore: s.boolean(),
      _keysMap: {
        runningCount: "running_count",
        terminatedCount: "terminated_count",
        hasMore: "has_more",
      },
    },
    { additionalProperties: s.json() },
  );
