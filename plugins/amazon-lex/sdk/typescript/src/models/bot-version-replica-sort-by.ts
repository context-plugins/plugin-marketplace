import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order8Schema, type Order8 } from "./order8.js";

export type BotVersionReplicaSortBy = {
  /** The attribute of the sort category for the version replicated bots. @default "BotVersion" */
  attribute?: "BotVersion";
  /** The order of the sort category for the version replicated bots. */
  order: Order8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botVersionReplicaSortBySchema: Schema<BotVersionReplicaSortBy> =
  s.object<BotVersionReplicaSortBy>(
    {
      attribute: s.defaulted(s.literal("BotVersion"), "BotVersion"),
      order: order8Schema,
    },
    { additionalProperties: s.json() },
  );
