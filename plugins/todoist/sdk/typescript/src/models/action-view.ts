import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActionView = {
  /** Permission action name. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionViewSchema: Schema<ActionView> = s.object<ActionView>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
