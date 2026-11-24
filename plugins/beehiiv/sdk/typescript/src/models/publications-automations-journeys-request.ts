import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsAutomationsJourneysRequest = {
  /** The email address associated with the subscription. */
  email?: string;
  /** The prefixed ID of the subscription. */
  subscriptionId?: string;
  /**
   * Override the publication's default double opt-in settings for this subscription. Possible
   * values are:
   * - "on" — The subscriber will receive a double opt-in confirmation email and will need to
   *   confirm their subscription prior to being marked as active.
   * - "off" — The subscriber will be marked as active immediately and will not receive a double
   *   opt-in confirmation email.
   * - "not_set" — The publication's default double opt-in settings will be applied to this
   *   subscription.
   */
  doubleOptOverride?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsAutomationsJourneysRequestSchema: Schema<PublicationsAutomationsJourneysRequest> =
  s.object<PublicationsAutomationsJourneysRequest>(
    {
      email: s.optional(s.string()),
      subscriptionId: s.optional(s.string()),
      doubleOptOverride: s.optional(s.string()),
      _keysMap: {
        subscriptionId: "subscription_id",
        doubleOptOverride: "double_opt_override",
      },
    },
    { additionalProperties: s.json() },
  );
