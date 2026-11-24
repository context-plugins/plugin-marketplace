import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Choice */
export type Choice = {
  /** Choice label. */
  label: string;
  /** Choice alias, for example, a number to represent the choice. */
  alias?: string | null;
  /** Choice ID. */
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const choiceSchema: Schema<Choice> = s.object<Choice>(
  {
    label: s.string(),
    alias: s.optionalNullable(s.string()),
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
