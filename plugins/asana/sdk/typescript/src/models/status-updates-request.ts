import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusUpdateRequestSchema, type StatusUpdateRequest } from "./status-update-request.js";

export type StatusUpdatesRequest = {
  data?: StatusUpdateRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusUpdatesRequestSchema: Schema<StatusUpdatesRequest> = s.object<StatusUpdatesRequest>(
  {
    data: s.optional(s.lazy(() => statusUpdateRequestSchema)),
  },
  { additionalProperties: s.json() },
);
