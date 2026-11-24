import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pollSchema, type Poll } from "./poll.js";

export type PollShowResponse = {
  data: Poll;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pollShowResponseSchema: Schema<PollShowResponse> = s.object<PollShowResponse>(
  {
    data: pollSchema,
  },
  { additionalProperties: s.json() },
);
