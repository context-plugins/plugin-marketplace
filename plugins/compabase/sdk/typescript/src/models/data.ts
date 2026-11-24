import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Domain error payload set by the handler. */
export type Data = {
  /** Human-readable message (used by 401 responses). */
  message?: string;
  /** Structured domain error (used by 400/404/429 responses). */
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    message: s.optional(s.string()),
    error: s.optional(s.lazy(() => errorSchema)),
  },
  { additionalProperties: s.json() },
);
