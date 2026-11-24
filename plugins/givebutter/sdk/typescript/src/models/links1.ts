import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links1 = {
  url: string | null;
  label: string;
  active: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links1Schema: Schema<Links1> = s.object<Links1>(
  {
    url: s.nullable(s.string()),
    label: s.string(),
    active: s.boolean(),
  },
  { additionalProperties: s.json() },
);
