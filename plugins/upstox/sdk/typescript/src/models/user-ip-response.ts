import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { userIpResponseData2Schema, type UserIpResponseData2 } from "./user-ip-response-data2.js";

export type UserIpResponse = {
  status?: Status;
  /** Current IP configuration. */
  data?: UserIpResponseData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userIpResponseSchema: Schema<UserIpResponse> = s.object<UserIpResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => userIpResponseData2Schema)),
  },
  { additionalProperties: s.json() },
);
