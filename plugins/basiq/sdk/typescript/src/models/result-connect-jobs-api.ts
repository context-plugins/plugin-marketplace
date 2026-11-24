import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResultConnectJobsApi = {
  type?: string;
  url?: string;
  code?: string;
  title?: string;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultConnectJobsApiSchema: Schema<ResultConnectJobsApi> = s.object<ResultConnectJobsApi>(
  {
    type: s.optional(s.string()),
    url: s.optional(s.string()),
    code: s.optional(s.string()),
    title: s.optional(s.string()),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
