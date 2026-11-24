import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order9Schema, type Order9 } from "./order9.js";

export type BotVersionSortBy = {
  /** The attribute to use to sort the list of versions. @default "BotVersion" */
  attribute?: "BotVersion";
  /** The order to sort the list. You can specify ascending or descending order. */
  order: Order9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botVersionSortBySchema: Schema<BotVersionSortBy> = s.object<BotVersionSortBy>(
  {
    attribute: s.defaulted(s.literal("BotVersion"), "BotVersion"),
    order: order9Schema,
  },
  { additionalProperties: s.json() },
);
