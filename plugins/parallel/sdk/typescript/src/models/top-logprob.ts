import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bytesSchema, type Bytes } from "./unions/bytes.js";

export type TopLogprob = {
  token: string;
  bytes?: Bytes;
  logprob: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topLogprobSchema: Schema<TopLogprob> = s.object<TopLogprob>(
  {
    token: s.string(),
    bytes: s.optional(s.lazy(() => bytesSchema)),
    logprob: s.float64(),
  },
  { additionalProperties: s.json() },
);
