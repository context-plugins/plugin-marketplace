import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeveloperAppSchema,
  type GoogleCloudApigeeV1DeveloperApp,
} from "./google-cloud-apigee-v1-developer-app.js";

export type GoogleCloudApigeeV1ListDeveloperAppsResponse = {
  /** List of developer apps and their credentials. */
  app?: GoogleCloudApigeeV1DeveloperApp[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListDeveloperAppsResponseSchema: Schema<GoogleCloudApigeeV1ListDeveloperAppsResponse> =
  s.object<GoogleCloudApigeeV1ListDeveloperAppsResponse>(
    {
      app: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DeveloperAppSchema))),
    },
    { additionalProperties: s.json() },
  );
