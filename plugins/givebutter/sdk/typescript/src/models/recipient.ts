import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Recipient = {
  name: string | null;
  email: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recipientSchema: Schema<Recipient> = s.object<Recipient>(
  {
    name: s.nullable(s.string()),
    email: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
