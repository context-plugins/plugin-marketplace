import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links2ConnectJobsApi = {
  self?: string;
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links2ConnectJobsApiSchema: Schema<Links2ConnectJobsApi> = s.object<Links2ConnectJobsApi>(
  {
    self: s.optional(s.string()),
    source: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
