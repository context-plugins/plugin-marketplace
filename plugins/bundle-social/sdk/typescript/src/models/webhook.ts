import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Webhook = {
  id?: string | null;
  name?: string | null;
  avatar?: string | null;
  url?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>(
  {
    id: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    avatar: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
