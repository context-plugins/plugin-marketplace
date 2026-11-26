import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BooleanVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of a boolean variable. @default "boolean" */
  type?: "boolean";
  /** Boolean value. */
  value: boolean | null;
};

export const booleanVariableSchema: Schema<BooleanVariable> = s.object<BooleanVariable>({
  name: s.string(),
  type: s.defaulted(s.literal("boolean"), "boolean"),
  value: s.nullable(s.boolean()),
});
