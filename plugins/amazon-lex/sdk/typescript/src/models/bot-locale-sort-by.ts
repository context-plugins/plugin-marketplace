import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order6Schema, type Order6 } from "./order6.js";

export type BotLocaleSortBy = {
  /** The bot locale attribute to sort by. @default "BotLocaleName" */
  attribute?: "BotLocaleName";
  /** Specifies whether to sort the bot locales in ascending or descending order. */
  order: Order6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botLocaleSortBySchema: Schema<BotLocaleSortBy> = s.object<BotLocaleSortBy>(
  {
    attribute: s.defaulted(s.literal("BotLocaleName"), "BotLocaleName"),
    order: order6Schema,
  },
  { additionalProperties: s.json() },
);
