import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Stack2 = {
  /** Display name for the new stack. */
  name: string;
  /** Default locale code for the stack (e.g., en-us). */
  masterLocale: string;
  /** Description of the stack's purpose. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stack2Schema: Schema<Stack2> = s.object<Stack2>(
  {
    name: s.string(),
    masterLocale: s.string(),
    description: s.optional(s.string()),
    _keysMap: {
      masterLocale: "master_locale",
    },
  },
  { additionalProperties: s.json() },
);
