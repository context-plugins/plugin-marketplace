import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1SpecSchema,
  type GoogleCloudApihubV1Spec,
} from "./google-cloud-apihub-v1-spec.js";

/** The ListSpecs method's response. */
export type GoogleCloudApihubV1ListSpecsResponse = {
  /** The specs corresponding to an API Version. */
  specs?: GoogleCloudApihubV1Spec[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListSpecsResponseSchema: Schema<GoogleCloudApihubV1ListSpecsResponse> =
  s.object<GoogleCloudApihubV1ListSpecsResponse>(
    {
      specs: s.optional(s.array(s.lazy(() => googleCloudApihubV1SpecSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
