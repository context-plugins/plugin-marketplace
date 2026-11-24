import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatusResponse = {
  message?: string;
  /** The AWS region that served the request. */
  region?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusResponseSchema: Schema<StatusResponse> = s.object<StatusResponse>(
  {
    message: s.optional(s.string()),
    region: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
