import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sent = {
  email: string;
  /** The mail provider accepted it. Not that it was read */
  delivered: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentSchema: Schema<Sent> = s.object<Sent>(
  {
    email: s.string(),
    delivered: s.boolean(),
  },
  { additionalProperties: s.json() },
);
