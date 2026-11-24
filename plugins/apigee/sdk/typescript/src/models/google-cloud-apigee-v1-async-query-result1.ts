import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Result is available only after the query is completed. */
export type GoogleCloudApigeeV1AsyncQueryResult1 = {
  /**
   * Self link of the query results. Example:
   * `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`
   * or following format if query is running at host level:
   * `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`
   */
  self?: string;
  /** Query result will be unaccessable after this time. */
  expires?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AsyncQueryResult1Schema: Schema<GoogleCloudApigeeV1AsyncQueryResult1> =
  s.object<GoogleCloudApigeeV1AsyncQueryResult1>(
    {
      self: s.optional(s.string()),
      expires: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
