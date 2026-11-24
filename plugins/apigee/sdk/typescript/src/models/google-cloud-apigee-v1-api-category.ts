import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * `ApiCategory` represents an API category. [Catalog
 * items](/apigee/docs/reference/apis/apigee/rest/v1/organizations.sites.apidocs) can be tagged with
 * API categories; users viewing the API catalog in the portal will have the option to browse the
 * catalog by category.
 */
export type GoogleCloudApigeeV1ApiCategory = {
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

export const googleCloudApigeeV1ApiCategorySchema: Schema<GoogleCloudApigeeV1ApiCategory> =
  s.object<GoogleCloudApigeeV1ApiCategory>(
    {
      name: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      id: s.optional(s.string()),
      siteId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
