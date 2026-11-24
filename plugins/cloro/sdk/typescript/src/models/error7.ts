import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";

export type Error7 = {
  /** @default "QUEUE_LIMIT_EXCEEDED" */
  code?: "QUEUE_LIMIT_EXCEEDED";
  message: string;
  details?: Details2;
  timestamp: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error7Schema: Schema<Error7> = s.object<Error7>(
  {
    code: s.defaulted(s.literal("QUEUE_LIMIT_EXCEEDED"), "QUEUE_LIMIT_EXCEEDED"),
    message: s.string(),
    details: s.optional(s.lazy(() => details2Schema)),
    timestamp: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
