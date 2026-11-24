import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type LogoutResponse = {
  status?: Status;
  /** Logout status */
  data?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logoutResponseSchema: Schema<LogoutResponse> = s.object<LogoutResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
