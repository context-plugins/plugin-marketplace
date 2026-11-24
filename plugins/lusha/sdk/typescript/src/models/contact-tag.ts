import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactTag = {
  id: string;
  name: string;
  color: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactTagSchema: Schema<ContactTag> = s.object<ContactTag>(
  {
    id: s.string(),
    name: s.string(),
    color: s.string(),
  },
  { additionalProperties: s.json() },
);
