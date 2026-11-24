import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import {
  googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1Schema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1,
} from "./google-analytics-admin-v1-beta-change-history-change-change-history-resource1.js";
import {
  googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3Schema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3,
} from "./google-analytics-admin-v1-beta-change-history-change-change-history-resource3.js";

/** A description of a change to a single Google Analytics resource. */
export type GoogleAnalyticsAdminV1BetaChangeHistoryChange = {
  /**
   * Resource contents from after the change was made. If this resource was deleted in this change,
   * this field will be missing.
   */
  resourceAfterChange?: GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3;
  /** Resource name of the resource whose changes are described by this entry. */
  resource?: string;
  /**
   * Resource contents from before the change was made. If this resource was created in this change,
   * this field will be missing.
   */
  resourceBeforeChange?: GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1;
  /** The type of action that changed this resource. */
  action?: Action;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaChangeHistoryChangeSchema: Schema<GoogleAnalyticsAdminV1BetaChangeHistoryChange> =
  s.object<GoogleAnalyticsAdminV1BetaChangeHistoryChange>(
    {
      resourceAfterChange: s.optional(
        s.lazy(() => googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3Schema),
      ),
      resource: s.optional(s.string()),
      resourceBeforeChange: s.optional(
        s.lazy(() => googleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1Schema),
      ),
      action: s.optional(s.lazy(() => actionSchema)),
    },
    { additionalProperties: s.json() },
  );
