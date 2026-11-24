import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusUpdateResponseSchema, type StatusUpdateResponse } from "./status-update-response.js";

export type StatusUpdatesResponse = {
  data?: StatusUpdateResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusUpdatesResponseSchema: Schema<StatusUpdatesResponse> = s.object<StatusUpdatesResponse>(
  {
    data: s.optional(s.lazy(() => statusUpdateResponseSchema)),
  },
  { additionalProperties: s.json() },
);
