import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetaZillapiZillowPropertyDataJobsApi = {
  limit?: number;
  offset?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaZillapiZillowPropertyDataJobsApiSchema: Schema<MetaZillapiZillowPropertyDataJobsApi> =
  s.object<MetaZillapiZillowPropertyDataJobsApi>(
    {
      limit: s.optional(s.int()),
      offset: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
