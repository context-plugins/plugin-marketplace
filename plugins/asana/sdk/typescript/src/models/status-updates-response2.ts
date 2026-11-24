import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusUpdateCompactAsanaStatusUpdatesApiSchema,
  type StatusUpdateCompactAsanaStatusUpdatesApi,
} from "./status-update-compact-asana-status-updates-api.js";

export type StatusUpdatesResponse2 = {
  data?: StatusUpdateCompactAsanaStatusUpdatesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusUpdatesResponse2Schema: Schema<StatusUpdatesResponse2> = s.object<StatusUpdatesResponse2>(
  {
    data: s.optional(s.array(s.lazy(() => statusUpdateCompactAsanaStatusUpdatesApiSchema))),
  },
  { additionalProperties: s.json() },
);
