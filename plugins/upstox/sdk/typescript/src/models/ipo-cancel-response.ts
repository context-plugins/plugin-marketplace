import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoCancelDataSchema, type IpoCancelData } from "./ipo-cancel-data.js";
import { statusSchema, type Status } from "./status.js";

export type IpoCancelResponse = {
  status?: Status;
  data?: IpoCancelData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoCancelResponseSchema: Schema<IpoCancelResponse> = s.object<IpoCancelResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => ipoCancelDataSchema)),
  },
  { additionalProperties: s.json() },
);
