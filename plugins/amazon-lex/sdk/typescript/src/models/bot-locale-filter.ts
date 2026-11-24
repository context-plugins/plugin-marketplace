import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operator7Schema, type Operator7 } from "./operator7.js";

export type BotLocaleFilter = {
  /** The name of the field to filter the list of bots. @default "BotLocaleName" */
  name?: "BotLocaleName";
  /** The value to use for filtering the list of bots. */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListBotLocales operation should return
   * only aliases that equal the specified value. Specify CO when the ListBotLocales operation
   * should return aliases that contain the specified value.
   */
  operator: Operator7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botLocaleFilterSchema: Schema<BotLocaleFilter> = s.object<BotLocaleFilter>(
  {
    name: s.defaulted(s.literal("BotLocaleName"), "BotLocaleName"),
    values: s.array(s.string()),
    operator: operator7Schema,
  },
  { additionalProperties: s.json() },
);
