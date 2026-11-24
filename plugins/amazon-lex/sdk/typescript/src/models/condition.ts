import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Condition = {
  /** The expression string that is evaluated. */
  expressionString: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionSchema: Schema<Condition> = s.object<Condition>(
  {
    expressionString: s.string(),
  },
  { additionalProperties: s.json() },
);
