import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateTimeVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of a datetime variable. @default "dateTime" */
  type?: "dateTime";
  /** Datetime in format ISO_LOCAL_DATE_TIME 'YYYY-MM-DDTHH:MM:SS'. */
  value: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateTimeVariableSchema: Schema<DateTimeVariable> = s.object<DateTimeVariable>(
  {
    name: s.string(),
    type: s.defaulted(s.literal("dateTime"), "dateTime"),
    value: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
