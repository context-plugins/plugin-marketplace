import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventDataRetentionSchema, type EventDataRetention } from "./event-data-retention.js";
import { userDataRetentionSchema, type UserDataRetention } from "./user-data-retention.js";

/** A snapshot of a data retention settings resource in change history. */
export type GoogleAnalyticsAdminV1BetaDataRetentionSettings2 = {
  /**
   * Identifier. Resource name for this DataRetentionSetting resource. Format:
   * properties/{property}/dataRetentionSettings
   */
  name?: string;
  /** Required. The length of time that user-level data is retained. */
  userDataRetention?: UserDataRetention;
  /** Required. The length of time that event-level data is retained. */
  eventDataRetention?: EventDataRetention;
  /**
   * If true, reset the retention period for the user identifier with every event from that user.
   */
  resetUserDataOnNewActivity?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaDataRetentionSettings2Schema: Schema<GoogleAnalyticsAdminV1BetaDataRetentionSettings2> =
  s.object<GoogleAnalyticsAdminV1BetaDataRetentionSettings2>(
    {
      name: s.optional(s.string()),
      userDataRetention: s.optional(s.lazy(() => userDataRetentionSchema)),
      eventDataRetention: s.optional(s.lazy(() => eventDataRetentionSchema)),
      resetUserDataOnNewActivity: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
