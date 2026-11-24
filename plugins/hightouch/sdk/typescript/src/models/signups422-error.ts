import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageSchema, type Message } from "./message.js";

export type Signups422Error = {
  message?: Message;
  code?: string;
  details?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signups422ErrorSchema: Schema<Signups422Error> = s.object<Signups422Error>(
  {
    message: s.optional(s.lazy(() => messageSchema)),
    code: s.optional(s.string()),
    details: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
