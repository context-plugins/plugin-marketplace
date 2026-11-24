import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { variableSchema, type Variable } from "./variable.js";

/** A list of project variables. */
export type VariableList = {
  /** Array of variable objects. */
  data?: Variable[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const variableListSchema: Schema<VariableList> = s.object<VariableList>(
  {
    data: s.optional(s.array(s.lazy(() => variableSchema))),
  },
  { additionalProperties: s.json() },
);
