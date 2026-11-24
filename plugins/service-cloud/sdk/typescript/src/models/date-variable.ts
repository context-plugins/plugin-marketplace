import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DateVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of a date variable. @default "date" */
  type?: "date";
  /** Date in format ISO_LOCAL_DATE 'YYYY-MM-DD'. */
  value: string | null;
};

export const dateVariableSchema: Schema<DateVariable> = s.object<DateVariable>({
  name: s.string(),
  type: s.defaulted(s.literal("date"), "date"),
  value: s.nullable(s.string()),
});
