import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PhoneResource = {
  type: string | null;
  value: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneResourceSchema: Schema<PhoneResource> = s.object<PhoneResource>(
  {
    type: s.nullable(s.string()),
    value: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
