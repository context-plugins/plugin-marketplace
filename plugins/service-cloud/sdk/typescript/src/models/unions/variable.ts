import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { booleanVariableSchema, type BooleanVariable } from "../boolean-variable.js";
import { dateTimeVariableSchema, type DateTimeVariable } from "../date-time-variable.js";
import { dateVariableSchema, type DateVariable } from "../date-variable.js";
import { listVariableSchema, type ListVariable } from "../list-variable.js";
import { moneyVariableSchema, type MoneyVariable } from "../money-variable.js";
import { numberVariableSchema, type NumberVariable } from "../number-variable.js";
import { objectVariableSchema, type ObjectVariable } from "../object-variable.js";
import { refVariableSchema, type RefVariable } from "../ref-variable.js";
import { textVariableSchema, type TextVariable } from "../text-variable.js";

export type Variable =
  | BooleanVariable
  | DateVariable
  | DateTimeVariable
  | MoneyVariable
  | NumberVariable
  | TextVariable
  | ObjectVariable
  | RefVariable
  | ListVariable;

export const variableSchema: Schema<Variable> = s.of<Variable>(
  s.union([
    s.lazy(() => booleanVariableSchema),
    s.lazy(() => dateVariableSchema),
    s.lazy(() => dateTimeVariableSchema),
    s.lazy(() => moneyVariableSchema),
    s.lazy(() => numberVariableSchema),
    s.lazy(() => textVariableSchema),
    s.lazy(() => objectVariableSchema),
    s.lazy(() => refVariableSchema),
    s.lazy(() => listVariableSchema),
  ]),
);
