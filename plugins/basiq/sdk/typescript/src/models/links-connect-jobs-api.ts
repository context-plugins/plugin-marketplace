import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksConnectJobsApi = {
  link?: string;
  self?: string;
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksConnectJobsApiSchema: Schema<LinksConnectJobsApi> = s.object<LinksConnectJobsApi>(
  {
    link: s.optional(s.string()),
    self: s.optional(s.string()),
    source: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
