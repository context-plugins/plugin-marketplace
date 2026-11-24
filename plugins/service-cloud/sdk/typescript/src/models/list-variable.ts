import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Object variable that contains a list. @default "list" */
  type?: "list";
  /** Array of objects. */
  value: Record<string, unknown>[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVariableSchema: Schema<ListVariable> = s.object<ListVariable>(
  {
    name: s.string(),
    type: s.defaulted(s.literal("list"), "list"),
    value: s.nullable(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
