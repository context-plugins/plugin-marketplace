import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdSchema, type Created } from "./created.js";
import { nonDeletedSchema, type NonDeleted } from "./non-deleted.js";

export type DatumCoreAnalyticsApi = {
  date?: string;
  disruptionRate?: string;
  created?: Created;
  nonDeleted?: NonDeleted;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCoreAnalyticsApiSchema: Schema<DatumCoreAnalyticsApi> = s.object<DatumCoreAnalyticsApi>(
  {
    date: s.optional(s.string()),
    disruptionRate: s.optional(s.string()),
    created: s.optional(s.lazy(() => createdSchema)),
    nonDeleted: s.optional(s.lazy(() => nonDeletedSchema)),
  },
  { additionalProperties: s.json() },
);
