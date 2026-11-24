import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { variableSchema, type Variable } from "./unions/variable.js";

export type ObjectVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of an object variable. @default "object" */
  type?: "object";
  /** Variable value is an object. */
  value: Variable[] | null;
};

export const objectVariableSchema: Schema<ObjectVariable> = s.object<ObjectVariable>({
  name: s.string(),
  type: s.defaulted(s.literal("object"), "object"),
  value: s.nullable(s.array(s.lazy(() => variableSchema))),
});
