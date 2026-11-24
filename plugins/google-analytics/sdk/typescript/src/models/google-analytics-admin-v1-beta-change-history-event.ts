import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actorTypeSchema, type ActorType } from "./actor-type.js";
import {
  googleAnalyticsAdminV1BetaChangeHistoryChangeSchema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryChange,
} from "./google-analytics-admin-v1-beta-change-history-change.js";

/**
 * A set of changes within a Google Analytics account or its child properties that resulted from the
 * same cause. Common causes would be updates made in the Google Analytics UI, changes from customer
 * support, or automatic Google Analytics system changes.
 */
export type GoogleAnalyticsAdminV1BetaChangeHistoryEvent = {
  /** ID of this change history event. This ID is unique across Google Analytics. */
  id?: string;
  /** Time when change was made. */
  changeTime?: string;
  /** The type of actor that made this change. */
  actorType?: ActorType;
  /**
   * Email address of the Google account that made the change. This will be a valid email address if
   * the actor field is set to USER, and empty otherwise. Google accounts that have been deleted
   * will cause an error.
   */
  userActorEmail?: string;
  /**
   * If true, then the list of changes returned was filtered, and does not represent all changes
   * that occurred in this event.
   */
  changesFiltered?: boolean;
  /**
   * A list of changes made in this change history event that fit the filters specified in
   * SearchChangeHistoryEventsRequest.
   */
  changes?: GoogleAnalyticsAdminV1BetaChangeHistoryChange[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaChangeHistoryEventSchema: Schema<GoogleAnalyticsAdminV1BetaChangeHistoryEvent> =
  s.object<GoogleAnalyticsAdminV1BetaChangeHistoryEvent>(
    {
      id: s.optional(s.string()),
      changeTime: s.optional(s.string()),
      actorType: s.optional(s.lazy(() => actorTypeSchema)),
      userActorEmail: s.optional(s.string()),
      changesFiltered: s.optional(s.boolean()),
      changes: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaChangeHistoryChangeSchema))),
    },
    { additionalProperties: s.json() },
  );
