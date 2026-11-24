import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata information. */
export type GoogleCloudApigeeV1Metadata2 = {
  /** List of error messages as strings. */
  errors?: string[];
  /**
   * List of additional information such as data source, if result was truncated. For example: ```
   * "notices": [ "Source:Postgres", "PG Host:uappg0rw.e2e.apigeeks.net", "query served
   * by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed", "Table used: edge.api.uapgroup2.agg_api" ]```
   */
  notices?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1Metadata2Schema: Schema<GoogleCloudApigeeV1Metadata2> =
  s.object<GoogleCloudApigeeV1Metadata2>(
    {
      errors: s.optional(s.array(s.string())),
      notices: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
