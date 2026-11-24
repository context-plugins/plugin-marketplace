import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityActionSchema,
  type GoogleCloudApigeeV1SecurityAction,
} from "./google-cloud-apigee-v1-security-action.js";

/** Contains a list of SecurityActions in response to a ListSecurityActionRequest. */
export type GoogleCloudApigeeV1ListSecurityActionsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The SecurityActions for the specified environment. */
  securityActions?: GoogleCloudApigeeV1SecurityAction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListSecurityActionsResponseSchema: Schema<GoogleCloudApigeeV1ListSecurityActionsResponse> =
  s.object<GoogleCloudApigeeV1ListSecurityActionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      securityActions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1SecurityActionSchema))),
    },
    { additionalProperties: s.json() },
  );
