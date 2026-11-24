import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1DependencySchema,
  type GoogleCloudApihubV1Dependency,
} from "./google-cloud-apihub-v1-dependency.js";

/** The ListDependencies method's response. */
export type GoogleCloudApihubV1ListDependenciesResponse = {
  /** The dependency resources present in the API hub. */
  dependencies?: GoogleCloudApihubV1Dependency[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListDependenciesResponseSchema: Schema<GoogleCloudApihubV1ListDependenciesResponse> =
  s.object<GoogleCloudApihubV1ListDependenciesResponse>(
    {
      dependencies: s.optional(s.array(s.lazy(() => googleCloudApihubV1DependencySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
