import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsCommentsResponse2 = {
  /** @default "retracted" */
  status?: "retracted";
  threadId: string;
  threadRetracted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsCommentsResponse2Schema: Schema<ApiV1ReportsCommentsResponse2> =
  s.object<ApiV1ReportsCommentsResponse2>(
    {
      status: s.defaulted(s.literal("retracted"), "retracted"),
      threadId: s.string(),
      threadRetracted: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
