import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operatorSchema, type Operator } from "./operator.js";
import { valueSchema, type Value } from "./unions/value.js";

export type AndGroup = {
  /** Event field name to match against */
  key: string;
  /** Comparison operator */
  operator: Operator;
  /** Value to compare against (string, number, boolean) */
  value: Value;
};

export const andGroupSchema: Schema<AndGroup> = s.object<AndGroup>({
  key: s.string(),
  operator: operatorSchema,
  value: valueSchema,
});
