import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name24Schema, type Name24 } from "./name24.js";
import { operator6Schema, type Operator6 } from "./operator6.js";

export type BotFilter = {
  /** The name of the field to filter the list of bots. */
  name: Name24;
  /** The value to use for filtering the list of bots. */
  values: string[];
  /**
   * The operator to use for the filter. Specify EQ when the ListBots operation should return only
   * aliases that equal the specified value. Specify CO when the ListBots operation should return
   * aliases that contain the specified value.
   */
  operator: Operator6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botFilterSchema: Schema<BotFilter> = s.object<BotFilter>(
  {
    name: name24Schema,
    values: s.array(s.string()),
    operator: operator6Schema,
  },
  { additionalProperties: s.json() },
);
