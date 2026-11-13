import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { negativeKarmaReasonSchema, type NegativeKarmaReason } from "./negative-karma-reason.js";
import { positiveKarmaReasonSchema, type PositiveKarmaReason } from "./positive-karma-reason.js";

/** Karma update event with reasons and amounts. */
export type KarmaUpdateReasonEntry = {
  /** Timestamp when this karma update occurred (ISO 8601 datetime) */
  time?: string | null;
  /** New total karma score after this update */
  newKarma: number;
  /** Amount of karma gained in this update */
  positiveKarma: number;
  /** Amount of karma lost in this update (negative value) */
  negativeKarma: number;
  /**
   * List of reason codes for karma gains. Values: 1=Tasks added, 2=Tasks completed, 3=Advanced
   * features, 4=Signup, 5=Beta upgrade, 6=Support activity, 7=Premium upgrade, 8=Getting started,
   * 9=Daily goal reached, 10=Weekly goal reached
   */
  positiveKarmaReasons: PositiveKarmaReason[];
  /**
   * List of reason codes for karma losses. Values: 50=Tasks overdue, 51=Tasks postponed, 52=Is
   * inactive
   */
  negativeKarmaReasons: NegativeKarmaReason[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const karmaUpdateReasonEntrySchema: Schema<KarmaUpdateReasonEntry> = s.object<KarmaUpdateReasonEntry>(
  {
    time: s.optionalNullable(s.string()),
    newKarma: s.float64(),
    positiveKarma: s.float64(),
    negativeKarma: s.float64(),
    positiveKarmaReasons: s.array(s.lazy(() => positiveKarmaReasonSchema)),
    negativeKarmaReasons: s.array(s.lazy(() => negativeKarmaReasonSchema)),
    _keysMap: {
      newKarma: "new_karma",
      positiveKarma: "positive_karma",
      negativeKarma: "negative_karma",
      positiveKarmaReasons: "positive_karma_reasons",
      negativeKarmaReasons: "negative_karma_reasons",
    },
  },
  { additionalProperties: s.json() },
);
