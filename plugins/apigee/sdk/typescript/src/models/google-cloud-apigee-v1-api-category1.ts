import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The API category resource. */
export type GoogleCloudApigeeV1ApiCategory1 = {
  /** Name of the category. */
  name?: string;
  /** Time the category was last modified in milliseconds since epoch. */
  updateTime?: string;
  /** ID of the category (a UUID). */
  id?: string;
  /** Name of the portal. */
  siteId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ApiCategory1Schema: Schema<GoogleCloudApigeeV1ApiCategory1> =
  s.object<GoogleCloudApigeeV1ApiCategory1>(
    {
      name: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      id: s.optional(s.string()),
      siteId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
