import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { possibleValueSchema, type PossibleValue } from "./possible-value.js";
import { type5Schema, type Type5 } from "./type5.js";

export type WriteActionParameter = {
  /** The type of the value (e.g., integer, string, boolean, etc.) */
  type?: Type5;
  /** Human readable display name for the key. */
  displayName?: string;
  /** The value of the field. */
  value?: string;
  /** Is the parameter a required field. */
  isRequired?: boolean;
  /** Description of the parameter. */
  description?: string;
  /** Possible values that the parameter can take. */
  possibleValues?: PossibleValue[];
};

export const writeActionParameterSchema: Schema<WriteActionParameter> = s.object<WriteActionParameter>({
  type: s.optional(s.lazy(() => type5Schema)),
  displayName: s.optional(s.string()),
  value: s.optional(s.string()),
  isRequired: s.optional(s.boolean()),
  description: s.optional(s.string()),
  possibleValues: s.optional(s.array(s.lazy(() => possibleValueSchema))),
});
