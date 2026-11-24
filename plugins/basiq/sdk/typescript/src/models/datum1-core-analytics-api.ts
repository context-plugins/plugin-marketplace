import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./active.js";

export type Datum1CoreAnalyticsApi = {
  date?: string;
  created?: number;
  deleted?: number;
  active?: Active;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1CoreAnalyticsApiSchema: Schema<Datum1CoreAnalyticsApi> = s.object<Datum1CoreAnalyticsApi>(
  {
    date: s.optional(s.dateOnly()),
    created: s.optional(s.int()),
    deleted: s.optional(s.int()),
    active: s.optional(s.lazy(() => activeSchema)),
  },
  { additionalProperties: s.json() },
);
