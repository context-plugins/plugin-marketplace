import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

/** Event indicating an error. */
export type ErrorEvent = {
  /** Event type; always 'error'. @default "error" */
  type?: "error";
  /** Error. */
  error: Error2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorEventSchema: Schema<ErrorEvent> = s.object<ErrorEvent>(
  {
    type: s.defaulted(s.literal("error"), "error"),
    error: error2Schema,
  },
  { additionalProperties: s.json() },
);
