import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order7Schema, type Order7 } from "./order7.js";

export type BotSortBy = {
  /** The attribute to use to sort the list of bots. @default "BotName" */
  attribute?: "BotName";
  /** The order to sort the list. You can choose ascending or descending. */
  order: Order7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botSortBySchema: Schema<BotSortBy> = s.object<BotSortBy>(
  {
    attribute: s.defaulted(s.literal("BotName"), "BotName"),
    order: order7Schema,
  },
  { additionalProperties: s.json() },
);
