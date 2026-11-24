import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action1Schema, type Action1 } from "./action1.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";

/** Request message for SearchChangeHistoryEvents RPC. */
export type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest = {
  /** Optional. If set, only return changes if they are made by a user in this list. */
  actorEmail?: string[];
  /**
   * Optional. The maximum number of ChangeHistoryEvent items to return. If unspecified, at most 50
   * items will be returned. The maximum value is 200 (higher values will be coerced to the
   * maximum). Note that the service may return a page with fewer items than this value specifies
   * (potentially even zero), and that there still may be additional pages. If you want a particular
   * number of items, you'll need to continue requesting additional pages using `page_token` until
   * you get the needed number.
   */
  pageSize?: number;
  /**
   * Optional. If set, only return changes if they are for a resource that matches at least one of
   * these types.
   */
  resourceType?: ResourceType[];
  /** Optional. If set, only return changes made before this time (inclusive). */
  latestChangeTime?: string;
  /**
   * Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this
   * to retrieve the subsequent page. When paginating, all other parameters provided to
   * `SearchChangeHistoryEvents` must match the call that provided the page token.
   */
  pageToken?: string;
  /**
   * Optional. Resource name for a child property. If set, only return changes made to this property
   * or its child resources. Format: properties/{propertyId} Example: `properties/100`
   */
  property?: string;
  /** Optional. If set, only return changes made after this time (inclusive). */
  earliestChangeTime?: string;
  /** Optional. If set, only return changes that match one or more of these types of actions. */
  action?: Action1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestSchema: Schema<GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest> =
  s.object<GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest>(
    {
      actorEmail: s.optional(s.array(s.string())),
      pageSize: s.optional(s.int()),
      resourceType: s.optional(s.array(s.lazy(() => resourceTypeSchema))),
      latestChangeTime: s.optional(s.string()),
      pageToken: s.optional(s.string()),
      property: s.optional(s.string()),
      earliestChangeTime: s.optional(s.string()),
      action: s.optional(s.array(s.lazy(() => action1Schema))),
    },
    { additionalProperties: s.json() },
  );
