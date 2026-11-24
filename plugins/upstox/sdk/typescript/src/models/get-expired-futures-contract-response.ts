import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { expiredFutureDataSchema, type ExpiredFutureData } from "./expired-future-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetExpiredFuturesContractResponse = {
  status?: Status;
  data?: ExpiredFutureData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getExpiredFuturesContractResponseSchema: Schema<GetExpiredFuturesContractResponse> =
  s.object<GetExpiredFuturesContractResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => expiredFutureDataSchema))),
    },
    { additionalProperties: s.json() },
  );
