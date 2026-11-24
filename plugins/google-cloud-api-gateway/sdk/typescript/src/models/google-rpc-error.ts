import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** The error envelope every Google API returns. */
export type GoogleRpcError = {
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleRpcErrorSchema: Schema<GoogleRpcError> = s.object<GoogleRpcError>(
  {
    error: s.optional(s.lazy(() => errorSchema)),
  },
  { additionalProperties: s.json() },
);
