import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TextVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of a text variable. @default "text" */
  type?: "text";
  /** Variable value in text format. */
  value: string | null;
};

export const textVariableSchema: Schema<TextVariable> = s.object<TextVariable>({
  name: s.string(),
  type: s.defaulted(s.literal("text"), "text"),
  value: s.nullable(s.string()),
});
