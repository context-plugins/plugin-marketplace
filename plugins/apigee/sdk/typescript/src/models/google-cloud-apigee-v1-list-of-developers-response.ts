import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeveloperSchema,
  type GoogleCloudApigeeV1Developer,
} from "./google-cloud-apigee-v1-developer.js";

export type GoogleCloudApigeeV1ListOfDevelopersResponse = {
  /** List of developers. */
  developer?: GoogleCloudApigeeV1Developer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListOfDevelopersResponseSchema: Schema<GoogleCloudApigeeV1ListOfDevelopersResponse> =
  s.object<GoogleCloudApigeeV1ListOfDevelopersResponse>(
    {
      developer: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DeveloperSchema))),
    },
    { additionalProperties: s.json() },
  );
