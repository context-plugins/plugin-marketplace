import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Class represents one class of classification system */
export type ExpenseClass = {
  /**
   * Classification code for HEC classification: 4 levels class, group, subdivision and division.
   */
  classCode: string;
  /**
   * Classification code for HEC classification: 4 levels class, group, subdivision and division.
   */
  classTitle: string;
  divisionCode: string;
  divisionTitle: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expenseClassSchema: Schema<ExpenseClass> = s.object<ExpenseClass>(
  {
    classCode: s.string(),
    classTitle: s.string(),
    divisionCode: s.string(),
    divisionTitle: s.string(),
  },
  { additionalProperties: s.json() },
);
