import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countComparatorSchema, type CountComparator } from "./count-comparator.js";
import { triggerTypeSchema, type TriggerType } from "./trigger-type.js";

export type NotifyConfiguration = {
  /** Group the notification belongs to */
  group?: string;
  /** Workspace within the deployment to send the search results to. */
  notificationId?: string;
  /** Id of the search this function is running on. */
  searchId?: string;
  /** Id of the saved query */
  savedQueryId?: string;
  /**
   * Js expression that filters events, a greater than 'Trigger Count' events will trigger the
   * notification
   */
  trigger?: string;
  /**
   * Type of the trigger condition. custom applies a kusto expression over the results, and results
   * count applies a comparison over results count
   */
  triggerType?: TriggerType;
  /** Operation to be applied over the results count */
  triggerComparator?: CountComparator;
  /** How many results that match trigger the condition */
  triggerCount?: number;
  /** Number of results to include in the notification event */
  resultsLimit?: number;
  /** Url of the search results */
  searchUrl?: string;
  /**
   * Message content template, available fields: searchId, resultSet, savedQueryId, notificationId,
   * searchResultsUrl
   */
  message?: string;
  /** Auth token for sending notification messages */
  authToken?: string;
  /** System messages api endpoint */
  messagesEndpoint?: string;
  /** Current tenant id */
  tenantId?: string;
};

export const notifyConfigurationSchema: Schema<NotifyConfiguration> = s.object<NotifyConfiguration>({
  group: s.optional(s.string()),
  notificationId: s.optional(s.string()),
  searchId: s.optional(s.string()),
  savedQueryId: s.optional(s.string()),
  trigger: s.optional(s.string()),
  triggerType: s.optional(s.lazy(() => triggerTypeSchema)),
  triggerComparator: s.optional(s.lazy(() => countComparatorSchema)),
  triggerCount: s.optional(s.float64()),
  resultsLimit: s.optional(s.float64()),
  searchUrl: s.optional(s.string()),
  message: s.optional(s.string()),
  authToken: s.optional(s.string()),
  messagesEndpoint: s.optional(s.string()),
  tenantId: s.optional(s.string()),
});
