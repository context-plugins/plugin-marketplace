import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";

export type Filter = {
  /** The name of the parameter to filter on. */
  key: string;
  /** The value to match. */
  value: string;
  /**
   * The condition to apply. To include the objects that match the statement, specify IS. To exclude
   * matching objects, specify IS_NOT.
   */
  condition: Condition;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterSchema: Schema<Filter> = s.object<Filter>(
  {
    key: s.string(),
    value: s.string(),
    condition: conditionSchema,
    _keysMap: {
      key: "Key",
      value: "Value",
      condition: "Condition",
    },
  },
  { additionalProperties: s.json() },
);
