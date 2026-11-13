import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatusOkResponse = {
  /** Always `ok` on success. @default "ok" */
  status?: "ok";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusOkResponseSchema: Schema<StatusOkResponse> = s.object<StatusOkResponse>(
  {
    status: s.defaulted(s.literal("ok"), "ok"),
  },
  { additionalProperties: s.json() },
);
