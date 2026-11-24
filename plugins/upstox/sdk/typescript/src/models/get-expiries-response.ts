import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type GetExpiriesResponse = {
  status?: Status;
  data?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getExpiriesResponseSchema: Schema<GetExpiriesResponse> = s.object<GetExpiriesResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
