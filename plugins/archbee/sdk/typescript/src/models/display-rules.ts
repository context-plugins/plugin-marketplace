import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { combinatorSchema, type Combinator } from "./combinator.js";
import { rulesSchema, type Rules } from "./rules.js";

export type DisplayRules = {
  /** Unique identifier for the display rule */
  id: string;
  /** Human-readable title for the display rule */
  title: string;
  /** Logical operator to combine multiple rules */
  combinator: Combinator;
  /** Array of individual rules that define the conditions */
  rules: Rules;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const displayRulesSchema: Schema<DisplayRules> = s.object<DisplayRules>(
  {
    id: s.string(),
    title: s.string(),
    combinator: combinatorSchema,
    rules: rulesSchema,
  },
  { additionalProperties: s.json() },
);
