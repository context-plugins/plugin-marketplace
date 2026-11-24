import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { msgSchema, type Msg } from "./msg.js";

export type ApiV1LivenessResponse = {
  msg?: Msg;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1LivenessResponseSchema: Schema<ApiV1LivenessResponse> = s.object<ApiV1LivenessResponse>(
  {
    msg: s.optional(s.lazy(() => msgSchema)),
  },
  { additionalProperties: s.json() },
);
