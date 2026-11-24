import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1AttributeSchema,
  type GoogleCloudApihubV1Attribute,
} from "./google-cloud-apihub-v1-attribute.js";

/** The ListAttributes method's response. */
export type GoogleCloudApihubV1ListAttributesResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The list of all attributes. */
  attributes?: GoogleCloudApihubV1Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListAttributesResponseSchema: Schema<GoogleCloudApihubV1ListAttributesResponse> =
  s.object<GoogleCloudApihubV1ListAttributesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApihubV1AttributeSchema))),
    },
    { additionalProperties: s.json() },
  );
