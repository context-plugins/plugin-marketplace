import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideSupporterFeed = {
  /** @default "hide_supporter_feed" */
  name?: "hide_supporter_feed";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideSupporterFeedSchema: Schema<HideSupporterFeed> = s.object<HideSupporterFeed>(
  {
    name: s.defaulted(s.literal("hide_supporter_feed"), "hide_supporter_feed"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
