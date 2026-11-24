import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSourceSchema, type ErrorSource } from "./error-source.js";

/** The uniform `{error, source, detail}` envelope returned for every 4xx/5xx. */
export type ErrorResponseError = {
  error: string;
  /**
   * Who is at fault for a failure.
   *
   * ``user``: the customer's input, account, environment, or agent code. ``platform``: HUD
   * infrastructure or a broken platform invariant. ``provider``: a third-party dependency (cloud
   * runtime, upstream LLM API).
   */
  source: ErrorSource;
  detail: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  {
    error: s.string(),
    source: errorSourceSchema,
    detail: s.string(),
  },
  { additionalProperties: s.json() },
);
