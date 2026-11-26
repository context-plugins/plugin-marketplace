import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { impactSchema, type Impact } from "./impact.js";

export type StoryTickerTake = {
  ticker: string;
  /** The summary's read of the event for this ticker — an editorial call, not a price label. */
  impact: Impact;
  /** One line on why. */
  note: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyTickerTakeSchema: Schema<StoryTickerTake> = s.object<StoryTickerTake>(
  {
    ticker: s.string(),
    impact: impactSchema,
    note: s.string(),
  },
  { additionalProperties: s.json() },
);
