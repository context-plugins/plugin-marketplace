import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recordDayBooleanOrUndefinedSchema,
  type RecordDayBooleanOrUndefined,
} from "./record-day-boolean-or-undefined.js";

export type Expression = {
  /** Construct a type with a set of properties K of type T */
  days: RecordDayBooleanOrUndefined;
  time: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expressionSchema: Schema<Expression> = s.object<Expression>(
  {
    days: recordDayBooleanOrUndefinedSchema,
    time: s.string(),
  },
  { additionalProperties: s.json() },
);
