import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** The error envelope every Google API returns. */
export type GoogleRpcErrorError = {
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleRpcErrorErrorSchema: Schema<GoogleRpcErrorError> = s.object<GoogleRpcErrorError>(
  {
    error: s.optional(s.lazy(() => errorSchema)),
  },
  { additionalProperties: s.json() },
);
