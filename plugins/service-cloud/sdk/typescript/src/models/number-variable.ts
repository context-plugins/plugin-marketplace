import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumberVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of a number variable. @default "number" */
  type?: "number";
  /** Variable value in number format. */
  value: number | null;
};

export const numberVariableSchema: Schema<NumberVariable> = s.object<NumberVariable>({
  name: s.string(),
  type: s.defaulted(s.literal("number"), "number"),
  value: s.nullable(s.float64()),
});
