import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

/** The error envelope every Google API returns. */
export type GoogleRpcError = {
  error?: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleRpcErrorSchema: Schema<GoogleRpcError> = s.object<GoogleRpcError>(
  {
    error: s.optional(s.lazy(() => error1Schema)),
  },
  { additionalProperties: s.json() },
);
