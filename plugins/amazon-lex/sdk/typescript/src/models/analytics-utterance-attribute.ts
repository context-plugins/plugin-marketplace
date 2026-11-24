import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsUtteranceAttribute = {
  /**
   * An attribute to return. The only available attribute is the intent that the bot mapped the
   * utterance to.
   *
   * @default "LastUsedIntent"
   */
  name?: "LastUsedIntent";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsUtteranceAttributeSchema: Schema<AnalyticsUtteranceAttribute> =
  s.object<AnalyticsUtteranceAttribute>(
    {
      name: s.defaulted(s.literal("LastUsedIntent"), "LastUsedIntent"),
    },
    { additionalProperties: s.json() },
  );
