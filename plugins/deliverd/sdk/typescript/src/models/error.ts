import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** @default "agents_stopped" */
  code?: "agents_stopped";
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: s.defaulted(s.literal("agents_stopped"), "agents_stopped"),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
