import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoogleCloudApigeeV1ResourceConfig = {
  /**
   * Resource name in the following format:
   * `organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}` Only
   * environment-scoped resource files are supported.
   */
  name?: string;
  /** Location of the resource as a URI. */
  location?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ResourceConfigSchema: Schema<GoogleCloudApigeeV1ResourceConfig> =
  s.object<GoogleCloudApigeeV1ResourceConfig>(
    {
      name: s.optional(s.string()),
      location: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
